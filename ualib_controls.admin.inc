<?php

/**
 * Display list of all registered branches/entities
 */

function ualib_controls_admin_display_form(&$form_state){
  $branches = _ualib_load_branches();

  $form['branches'] = array(
    '#tree' => TRUE,
  );

  foreach ($branches as $branch){
    $form['branches'][$branch->lib_id]['lib_id'] = array(
      '#type' => 'hidden',
      '#value' => $branch->lib_id,
    );
    $form['branches'][$branch->lib_id]['lib_name'] = array(
      '#value' => $branch->lib_name,
    );
    $form['branches'][$branch->lib_id]['path'] = array(
      '#value' => $branch->path,
    );
    $form['branches'][$branch->lib_id]['edit'] = array(
      '#value' => l(t('Edit'), 'ualib-controls/edit/'. $branch->lib_id),
    );
    // Remove the delete link to prevent deletion of the Administration theme.
    $form['branches'][$branch->lib_id]['delete'] = array(
      '#value' => l(t('Delete'), 'ualib-controls/delete/'. $branch->lib_id),
    );
  }

  return $form;
}

/**
 * Theme section order configuration form.
 */
function theme_ualib_controls_admin_display_form($form) {

  $header = array(
    array('data' => t('Library/Entity')),
    array('data' => t('Path(s)'), 'colspan' => '3'),
  );

  $rows = array();
  foreach (element_children($form['branches']) as $key => $id) {
    // Don't take form control structures.
    if (is_array($form['branches'][$id]['lib_name'])) {
      $rows[] = array(
        'data' => array(
          drupal_render($form['branches'][$id]['lib_name']),
          drupal_render($form['branches'][$id]['path']),
          drupal_render($form['branches'][$id]['edit']),
          drupal_render($form['branches'][$id]['delete']),
        ),
      );
    }
  }
  if (empty($rows)) {
    $rows[] = array(array('data' => t('No branches available.'), 'colspan' => '4'));
  }

  $output = theme_table($header, $rows);
  $output .= drupal_render($form);
  return $output;
}


/**
 * Settings form for editing a branch/entity
 */
function ualib_contorls_admin_branch_form(&$form_state, $branch = NULL){
  if ($branch){
    $edit = (array)$branch;
  }
  else{
    $edit = NULL;
  }

  $form['branch_settings']['lib_name'] = array(
    '#type' => 'textfield',
    '#title' => t('Name'),
    '#default_value' => $edit['lib_name'],
    '#size' => 40,
    '#maxlength' => 64,
    '#description' => t('Enter the name of the UA library branch or entity. Names must be lowercase and dashes instead of spaces.'),
  );

  $form['branch_settings']['path'] = array(
  	'#type' => 'textarea',
    '#title' => t('Pages'),
    '#default_value' => $edit['path'],
    '#description' => t('URL aliases associated with this branch or entity. Enter only one path per line'),
    '#wysiwyg' => FALSE,
  );

  if (!empty($edit['lib_id'])){
    $form['lib_id'] = array(
      '#type' => 'hidden',
      '#value' => $edit['lib_id'],
    );
    $form['submit'] = array(
      '#type' => 'submit',
      '#value' => 'Save',
      '#submit' => array('ualib_contros_admin_branch_form_save'),
    );
  }
  else{
    $form['submit'] = array(
      '#type' => 'submit',
      '#value' => t('Add New Brach or Entity'),
    );
  }

  return $form;
}

function ualib_controls_branch_delete_form(&$form_state, $branch) {
  $form['lib_name'] = array('#type' => 'hidden', '#value' => $branch->lib_name);
  $form['lib_id'] = array('#type' => 'hidden', '#value' => $branch->lib_id);

  return confirm_form(
    $form,
    t('Delete section %name', array('%name' => $branch->lib_name)),
    'ualib-controls',
    '<p>'. t('Are you sure you want to delete the section %name?', array('%name' => $branch->lib_name)) .'</p>',
    t('Delete'),
    t('Cancel')
  );
}

/**
 * Implementation of hook_submit().
 *
 * Called from setting form to update changes made to a branch or entity
 */
function ualib_contorls_admin_branch_form_submit($form, &$form_state){
  db_query("INSERT INTO {ualib_data} (lib_name, path) VALUES ('%s', '%s')", $form_state['values']['lib_name'], $form_state['values']['path']);
  drupal_set_message(t('Branch/entity information has been added.'));
  $form_state['redirect'] = 'ualib-controls';
}

function ualib_controls_branch_delete_form_submit($form, &$form_state) {
  db_query('DELETE FROM {ualib_data} WHERE lib_id = %d', $form_state['values']['lib_id']);
  drupal_set_message(t('The branch/entity %name has been deleted.', array('%name' => $form_state['values']['lib_name'])));
  $form_state['redirect'] = 'ualib-controls';
  return;
}

function ualib_contros_admin_branch_form_save($form, &$form_state){
  db_query("UPDATE {ualib_data} SET lib_name = '%s', path = '%s' WHERE lib_id = %d", $form_state['values']['lib_name'], $form_state['values']['path'], $form_state['values']['lib_id']);
  drupal_set_message(t('Branch/entity information has been saved.'));
  $form_state['redirect'] = 'ualib-controls';
}


/*#########################
 * 		Helper Functions
 *########################*/

/**
 * _ualib_load_branches()
 *
 * - Returns all branches/entities registered in the ualib_controls SQL table
 */

function _ualib_load_branches(){
  $branches = array();
  $result = db_query("SELECT * FROM {ualib_data} ORDER BY lib_name");

  while ($row = db_fetch_object($result)){
    $branches[] = $row;
  }
  return $branches;
}
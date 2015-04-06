/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function(config) {
    config.language = 'en';
    config.toolbar_Pure = [
      {
        name: 'basicstyles',
        items: ['Bold', 'Italic', 'Underline', 'Strike']
      }, {
        name: 'paragraph',
        items: ['NumberedList', 'BulletedList']
      }, {
        name: 'links',
        items: ['Link', 'Unlink']
      }, {
        name: 'styles',
        items: ['Format', 'Font', 'FontSize']
      }
    ];
    config.toolbar = 'Pure';
    return true;
  };

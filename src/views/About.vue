<template>
  <v-app>
    <v-container fluid style="height:50%; min-height:50%;">
      <v-layout column>
        <v-flex>
          <v-card>
            <v-card-text>
              <ckeditor style="height:100%;" :editor="editor" v-model="editorData" :config="editorConfig"/>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript'
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Table from '@ckeditor/ckeditor5-table/src/table'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor</p>",
      editorConfig: {
        plugins: [
          Essentials,
          UploadAdapter,
          Autoformat,
          Bold,
          Italic,
          BlockQuote,
          EasyImage,
          Heading,
          Image,
          ImageCaption,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          Link,
          List,
          Paragraph,
          Alignment,
          Highlight,
          Strikethrough,
          Underline,
          Superscript,
          Subscript,
          Table,
          TableToolbar,
        ],
        toolbar: {
          items: [
            "heading",
            "|",
            "alignment", // <--- ADDED
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "superscript",
            "subscript",
            "link",
            "bulletedList",
            "numberedList",
            "imageUpload",
            "blockQuote",
            "insertTable",
            "undo",
            "redo",
            "highlight",
            "imageStyle:full",
            "imageStyle:side",
            "|",
            "imageTextAlternative"
          ]
        },
      }
    };
  }
};
</script>
<style scoped>
</style>


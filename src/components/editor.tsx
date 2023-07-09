import * as React from 'react';
import { cn } from '@/lib/utils';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type EditorProps = {
  className?: string;
};

const Editor: React.FC<EditorProps> = ({ className, ...props }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World!️</p>',
    editorProps: {
      attributes: {
        class: cn(
          'prose px-3 py-2 border rounded-md dark:prose-invert',
          className
        ),
      },
    },
    onUpdate: ({ editor }) => {
      // console.log(editor.getJSON());
    },
  });

  return <EditorContent editor={editor} />;
};

export default Editor;

import * as React from 'react';
import { cn } from '@/lib/utils';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type EditorProps = {
  className?: string;
  editorContent: any;
  onEditorChange: (data: any) => void;
};

const Editor: React.FC<EditorProps> = ({
  className,
  editorContent,
  onEditorChange,
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: editorContent,
    editorProps: {
      attributes: {
        class: cn(
          'prose max-w-none overflow-y-scroll px-3 py-2 border text-sm rounded-md dark:prose-invert border border-input bg-transparent ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        ),
      },
    },
    onUpdate: ({ editor }) => {
      onEditorChange(editor.getJSON());
    },
  });

  return <EditorContent editor={editor} />;
};

export default Editor;

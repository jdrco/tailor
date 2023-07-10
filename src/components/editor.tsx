import * as React from 'react';
import { cn } from '@/lib/utils';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type EditorProps = {
  className?: string;
  editorType?: 'input' | 'target';
  onChange: (data: any) => void;
};

const Editor: React.FC<EditorProps> = ({ className, editorType, ...props }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content:
      editorType === 'input'
        ? 'Tailor your words here ...'
        : 'Target text to tailor to ...',
    editorProps: {
      attributes: {
        class: cn(
          'prose max-w-none px-3 py-2 border text-sm rounded-md dark:prose-invert border border-input bg-transparent ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        ),
      },
    },
    onUpdate: ({ editor }) => {
      props?.onChange(editor.getJSON());
    },
  });

  return <EditorContent editor={editor} />;
};

export default Editor;

'use client'
import StarterKit from '@tiptap/starter-kit'
import { Content } from '@tiptap/core'
import Placeholder from '@tiptap/extension-placeholder'
import Link from '@tiptap/extension-link'
import { useEditor, EditorContent } from '@tiptap/react'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import TaskList from '@tiptap/extension-task-list'
import Underline from '@tiptap/extension-underline'
import {
  Bold,
  Code2,
  Heading1,
  Highlighter,
  ImageIcon,
  Italic,
  List,
  ListChecks,
  ListOrdered,
  Quote,
  Underline as UnderlineIcon
} from 'lucide-react'
import { UploadButton } from './UploadButton'

export const Editor = ({ content, onChange }: { content?: Content; onChange: (content: Content) => void }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            class: 'text-xl font-bold capitalize',
            levels: [1]
          }
        },
        blockquote: {
          HTMLAttributes: {
            class: 'border-l-4 border-gray-500 pl-4 italic text-gray-600'
          }
        },
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc ml-2'
          }
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal ml-2'
          }
        },
        codeBlock: {
          HTMLAttributes: {
            class: 'bg-gray-900 text-white p-3 rounded-lg font-mono overflow-x-auto'
          }
        },
        paragraph: {
          HTMLAttributes: {
            class: 'paragraph-wrapper'
          }
        }
      }),
      Underline,
      Image.configure({
        inline: true,

        HTMLAttributes: {
          class: 'w-[50%] h-[100%] object-cover rounded-lg border border-gray-300'
        }
      }),
      Highlight,
      Link.configure({ openOnClick: true }),
      TaskList.configure({ HTMLAttributes: { class: 'space-y-2 list-none' } }),
      TaskItem.configure({ HTMLAttributes: { class: 'flex items-center space-x-2' } }),
      Placeholder.configure({ placeholder: 'Start writing your blog here...' })
    ],
    editorProps: {
      attributes: {
        class:
          'shadow appearance-none min-h-[150px] border rounded w-full py-2 px-3 text-black text-sm mt-0 md:mt-3 leading-tight focus:outline-none focus:shadow-outline'
      }
    },
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    immediatelyRender: false
  })

  if (!editor) return null

  return (
    <div className='border border-gray-300 rounded-lg shadow-sm flex-1'>
      <div className='button-group sticky'>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded-md hover:bg-gray-200 ${editor.isActive('bold') ? 'bg-gray-300' : ''}`}>
          <Bold className='w-5 h-5' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded-md hover:bg-gray-200 ${editor.isActive('italic') ? 'bg-gray-300' : ''}`}>
          <Italic className='w-5 h-5' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded-md hover:bg-gray-200 ${editor.isActive('underline') ? 'bg-gray-300' : ''}`}>
          <UnderlineIcon className='w-5 h-5' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded-md hover:bg-gray-200 ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-300' : ''}`}>
          <Heading1 className='w-5 h-5' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={`p-2 rounded-md hover:bg-gray-200 ${editor.isActive('highlight') ? 'bg-gray-300' : ''}`}>
          <Highlighter className='w-5 h-5' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`p-2 rounded-md hover:bg-gray-200 ${editor.isActive('code') ? 'bg-gray-300' : ''}`}>
          <Code2 className='w-5 h-5' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded-md hover:bg-gray-200 ${editor.isActive('bulletList') ? 'bg-gray-300' : ''}`}>
          <List className='w-5 h-5' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded-md hover:bg-gray-200 ${editor.isActive('orderedList') ? 'bg-gray-300' : ''}`}>
          <ListOrdered className='w-5 h-5' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleTaskList().run()}
          className={`p-2 rounded-md hover:bg-gray-200 ${editor.isActive('taskList') ? 'bg-gray-300' : ''}`}>
          <ListChecks className='w-5 h-5' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded-md hover:bg-gray-200 ${editor.isActive('blockquote') ? 'bg-gray-300' : ''}`}>
          <Quote className='w-5 h-5' />
        </button>
        <button
          onClick={() => document.getElementById('image-upload')?.click()}
          className='p-2 rounded-md hover:bg-gray-200'>
          <UploadButton
            appearance={{
              button: 'text-[#4C5E67]',
              container: 'w-5 h-5',
              allowedContent: 'hidden'
            }}
            endpoint='blogImage'
            onClientUploadComplete={res => {
              editor.chain().focus().setImage({ src: res?.[0]?.ufsUrl }).run()
            }}
            onUploadError={error => {
              console.error(error)
            }}
            content={{
              button() {
                return <ImageIcon className='w-5 h-5' />
              }
            }}
          />
        </button>
      </div>
      <EditorContent editor={editor} className='p-3 min-h-[300px]' />
    </div>
  )
}

export default Editor

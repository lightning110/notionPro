import Link from 'next/link'
// 弹出图片标签语义化
const ModalTags = ({ tag }) => (
  (<Link href={`/tag/${encodeURIComponent(tag)}`}>

    <p className="font-bold mr-2 text-xs rounded-md mt-3 px-2 py-1  bg-gray-50/40 text-white hover:bg-sky-400 active:outline-none active:ring2 active:ring-sky-200 duration-500">
      {tag}
    </p>
  {/* <div className='dark:bg-black dark:bg-opacity-50z-20 px-4 bg-gray-50 hidden glassmorphism md:fixed bottom-0 w-screen py-4 md:flex flex-row justify-between items-center'></div> */}
  </Link>)
)

export default ModalTags

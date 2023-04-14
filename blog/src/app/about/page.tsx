import Image from 'next/image';
import Link from 'next/link';
import face from '../../../public/picture.bmp';

export default function about() {
  return (
    <div className='flex justify-center h-screen'>
      <div className='text-center'>
        <Image className='rounded-full' src={face} height={180} alt={'이쁜'} />
        <p>My name is Park Juhyun</p>
        <p>Full-stack Engineer</p>
        <p>JS, Python</p>
        <Link href='/contact' className='bg-pink-200'>
          <button>Contact Me</button>
        </Link>
      </div>
    </div>
  );
}

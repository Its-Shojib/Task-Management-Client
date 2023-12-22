import Lottie from 'lottie-react';
import animation from '../../../public/Task Animation.json'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className="bg-[#121436] min-h-[480px] ">
            <div className="flex flex-col md:flex-row justify-around items-center max-w-screen-xl mx-auto">
                <div className=" text-white space-y-5">
                    <h1 className="text-2xl ">Get more done with <br />
                        <span className='text-3xl md:text-5xl font-bold'>
                            <TypeAnimation
                                sequence={[
                                    'Task Master...!',
                                    1000,
                                    'Task Management',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={30}
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </span></h1>
                    <p className="text-lg max-w-md font-thin">Organize and manage your task like a boss with Task-Master, a free task management tool packing more capabilities than you can imagine.
                    </p>
                    <button className="bg-sky-900 shadow-white text-white px-8 py-3 rounded-full text-lg font-bold"><Link to='/task-dashboard/task-management'>Let’s Explore</Link></button>
                </div>
                <div className="">
                    <Lottie className="h-[450px] w-full z-10" animationData={animation} loop={true} />
                </div>
            </div>
        </div>
    )
}
export default Banner;
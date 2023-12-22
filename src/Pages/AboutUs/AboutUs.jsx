import animation from './Animation - 1701198416051.json'
import { Helmet } from 'react-helmet-async';
import Lottie from 'lottie-react';


const AboutUs = () => {

    return (
        <div className="w-full md:w-10/12 mx-auto my-10 pt-1">
            <Helmet><title>Task Master | About Us</title></Helmet>

            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1">
                    <Lottie className="h-[450px] w-10/12" animationData={animation} loop={true}></Lottie>
                </div>

                <div className='flex-1'>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            How can i use task master?
                        </div>
                        <div className="collapse-content">
                            <p>Its very easy & simple. Just click Explore to go to the registration page and follow the steps by filling up all the required information and then use Task Master.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Are my Profile Secure?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, It is 100% secure.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Is there any notification system?
                        </div>
                        <div className="collapse-content">
                            <p>Off-course, There is a notification system.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;
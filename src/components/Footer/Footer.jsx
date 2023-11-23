import social from '../../assets/icons/social.png';

const Footer = () => {
    return (
        <div className="bg-[#000] py-24">
            <div className="container mx-auto">
            <div className="grid grid-cols-5 gap-8 pb-8">
                <div>
                    <h3 className="text-white text-3xl font-bold pb-2">CareerBoost</h3>
                    <p className="text-gray-400 leading-8">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                </div>
                <div>
                    <h4 className="text-xl text-white font-semibold pb-4">Company</h4>
                    <p className="text-gray-400 leading-8">About Us</p>
                    <p className="text-gray-400 leading-8">Work</p>
                    <p className="text-gray-400 leading-8">Latest News</p>
                    <p className="text-gray-400 leading-8">Careers</p>            
                </div>
                <div>
                    <h4 className="text-xl text-white font-semibold pb-4">Product</h4>
                    <p className="text-gray-400 leading-8">Prototype</p>
                    <p className="text-gray-400 leading-8">Plans & Pricing</p>
                    <p className="text-gray-400 leading-8">Customers</p>
                    <p className="text-gray-400 leading-8">Integrations</p>            
                </div>
                <div>
                    <h4 className="text-xl text-white font-semibold pb-4">Support</h4>
                    <p className="text-gray-400 leading-8">Help Desk</p>
                    <p className="text-gray-400 leading-8">Sales</p>
                    <p className="text-gray-400 leading-8">Become a Partner</p>
                    <p className="text-gray-400 leading-8">Developers</p>            
                </div>
                <div>
                    <h4 className="text-xl text-white font-semibold pb-4">Contact</h4>
                    <p className="text-gray-400 leading-8">Bosila, Dhaka</p>
                    <p className="text-gray-400 leading-8 mb-3">+88 01900-111111</p> 
                    <div>
                        <img src={social} alt="" />
                    </div>        
                </div>
            </div>
            <hr className='mb-8' />
            <div className='flex justify-between text-gray-400'>
                <div>
                    <p>@2023 CareerBoost. All Rights Reserved</p>
                </div>
                <div>
                    <p>Powered by CareerBoost</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;
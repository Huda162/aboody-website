import Image from "next/image";

export default function Contact() {
    return (
        <section className=" pt-[10px] pb-[40px] ">
            <div className="mt-8 flex flex-col md:flex-row items-ceneter justify-center rounded rounded-lg">
                <form action="" className="space-y-7 p-[7rem]" style={{ backgroundImage: 'url(/assets/images/contact-bg.png)' }}>
                    <h2 className="text-center text-white text-3xl font-semibold pb-7">تواصل معنا</h2>
                    <input type="email" id="email" className="border border-[#767676] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="your name" required />
                    <input type="email" id="email" className=" border border-[#767676] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="your phone" required />
                    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-white  rounded-lg border border-[#767676] focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </form>
                <div className="space-y-4">
                    <Image src='/assets/images/image-7.png' width={800} height={500} alt="contact us" />
                </div>
            </div>
        </section>
    )
}
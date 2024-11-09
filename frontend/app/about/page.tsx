import Cta2Section from "@app/home/_views/cta2.section"
import GallerySection from "@app/about/_view/Gallery.section"


export default function AboutPage() {

	return (
		<main className="h-full w-full min-h-screen flex flex-col items-center gap-y-8 py-8 px-8 md:px-32">

			<h1 className="text-3xl my-4 font-bold">About Our Company</h1>

			<div className="w-full md:w-[60%] h-[50vh] my-12 z-0 top-0 bottom-0 overflow-visible bg-secondary rounded-[20%] flex">
				<video loop className={"w-full rounded-b-[20%] rounded-l-[20%]"} autoPlay muted
					   src={"/video/about.mp4"} />
			</div>

			<p className={"md:text-center w-full md:w-[60%]"}>
				Welcome to <span className={"text-primary dark:text-secondary font-semibold"}>JUSTCUPCAKES</span> where every cupcake
				tells a story of passion, creativity, and indulgence.
				<br /><br />
				<span className={"text-primary dark:text-secondary font-semibold"}>Founded in 2023</span> in the charming borough of <span
				className={"text-primary dark:text-secondary font-semibold"}>Hillingdon, London UK</span> .Justcupcakes has been serving
				up
				delectable treats to dessert lovers across the UK. From humble beginnings in a small kitchen to becoming
				a
				beloved fixture in the local community, our journey has been one of growth, dedication, and a whole lot
				of
				sweetness.
			</p>

			<img className={"w-full md:w-[60%]"} src={"/img/5-stars.png"} />

			<p className={"md:text-center w-full md:w-[60%]"}>
				<span className={"text-primary dark:text-secondary font-semibold"}>Approved</span> by the <span
				className={"text-primary dark:text-secondary font-semibold"}>Food Standards Agency in 14th July,2023.</span> Justcupcakes
				has established <span className={"text-primary dark:text-secondary font-semibold"}>itself as a
				reputable brand</span> known for its <span className={"text-primary dark:text-secondary font-semibold"}>commitment to quality</span> and <span
				className={"text-primary dark:text-secondary font-semibold"}>exceptional service</span>. Our dedication to using
				only the finest ingredients and adhering to the highest standards of food safety has earned us the trust
				and loyalty of our customers.
				<br /><br />
				With a proud history of delivering delicious cupcakes that delight the senses, Justcupcakes has been
				<span className={"text-primary dark:text-secondary font-semibold"}>recognized</span> as <span
				className={"text-primary dark:text-secondary font-semibold"}>a five-star cupcake brand</span>, setting the standard for
				excellence in taste and presentation.
				Each cupcake is meticulously crafted with care and attention to detail, ensuring that every bite is a
				moment of pure indulgence.
			</p>

			<img className={"w-full md:w-[60%] my-8"} src={"/img/logo-img.png"} />

			<p className={"md:text-center w-full md:w-[60%]"}>
				But beyond the accolades and recognition, Justcupcakes is <span
				className={"text-primary dark:text-secondary font-semibold"}>more than just a bakery</span> – it's a place where
				memories are made, celebrations are shared, and happiness is served on a platter. Whether you're
				stopping by for a sweet treat or ordering cupcakes for a special occasion, we invite you to <span
				className={"text-primary dark:text-secondary font-semibold"}>experience
				the joy of Just cupcakes</span> and discover why life is better with cupcakes.
				<br /><br />
				Indulge in a moment of sweetness with Justcupcakes, because every cupcake tells a story, and ours is one
				of passion, creativity, and a whole lot of love.
			</p>

			<div className="flex flex-row my-[10%] justify-between">
				<div className="w-full md:w-[50%] flex  gap-12 md:gap-0 flex-col justify-evenly">

					<div className="w-full flex gap-4 flex-row">
						<span className="w-2 rounded-lg h-full bg-secondary"></span>
						<div className="flex w-full flex-col">
							<p className={"font-semibold text-2xl"}>Our Vision</p>
							<p className={ "dark:text-gray-300"}>
								To be the leading destination for gourmet cupcakes, renowned for our exceptional
								quality, innovative flavors, and unparalleled customer experience. We envision a world
								where every cupcake is a celebration, every bite is a moment of pure indulgence, and
								every customer feels cherished and valued. As we continue to grow and expand, we remain
								committed to our core values of quality, creativity, and community, striving to make
								life sweeter, one cupcake at a time.
							</p>
						</div>
					</div>

					<div className="w-full flex gap-4 flex-row">
						<span className="w-2 rounded-lg h-full bg-secondary"></span>
						<div className="flex w-full flex-col">
							<p className={"font-semibold text-2xl"}>Our Mission Statement</p>
							<p className={ "dark:text-gray-300"}>
								To spread joy, one cupcake at a time. We are dedicated to creating delicious,
								beautifully crafted cupcakes that bring smiles to faces and create lasting memories.
								With a passion for baking and a commitment to quality, we aim to delight our customers
								with every bite and make every occasion a little sweeter.
							</p>
						</div>
					</div>

					<div className="w-full flex gap-4 flex-row">
						<span className="w-2 rounded-lg h-full bg-secondary"></span>
						<div className="flex w-full flex-col">
							<p className={"font-semibold text-2xl"}>Our Core Values</p>
							<p className={ "dark:text-gray-300"}>
								• Quality <br />
								• Creativity <br />
								• Customer Satisfaction <br />
								• Community <br />
								• Integrity <br />
								• Timely and Excellence service delivery <br />
							</p>
						</div>
					</div>


				</div>
				<img className={"hidden md:flex w-[35%] my-8"} src={"/img/about-r-img.png"} />
			</div>

			<Cta2Section gradient={"95.64deg, rgb(17 57 25 / 82%) -0.61%, rgb(16 94 24 / 82%) 60.36%, rgb(43 255 46 / 82%) 122.62%"} />

			<h3 className="text-3xl mt-4 font-bold">Image Gallery</h3>
			<h4 className="text-center">Take a look at some of our products during production & delivery</h4>

			<GallerySection />

		</main>
	)
}


const GallerySection = ({}) => {


	return (
		<div className={"w-full gap-4 grid grid-cols-1 md:grid-cols-3 my-4 min-h-screen"}>
			{
				Array.from({length: 21}).map((_, index) => (
					<div key={index} className={"w-full h-60 bg-gray-300 rounded-lg"} style={{ backgroundImage: `url("/img/gallery/PICTURE%20SCROLL%20${index+1}.png")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
				))
			}
		</div>
	)
}


export default GallerySection

import React from "react";
import * as Icons from "@heroicons/react/24/outline";
import * as Iconly from "react-iconly";
import * as Lucide from "lucide-react";
import {HEX2RGBA} from "@utils";

type IconStyledProps = {
	icon: string | React.ReactNode;
	color?: string;
	bgColor?: string;
	className?: string;
};

const StyledIcon = ({icon = "home", color = "#1652d3", bgColor = "#1652d3", className}: IconStyledProps) => {
	const getIcon = (icon: string) => {
		const heroPack = Icons[icon];
		const iconlyPack = Iconly[icon];
		const lucidePack = Lucide[icon];

		return heroPack ? heroPack : iconlyPack ? iconlyPack : lucidePack ? lucidePack : Icons.ExclamationTriangleIcon;
	};
	const IconTag = typeof icon === "string" ? getIcon(icon) : (null as keyof JSX.IntrinsicElements);

	return (
		<div
			className={`my-1 rounded-xl p-2 w-10 h-10 flex items-center justify-center ${className}`}
			style={{
				backgroundColor: HEX2RGBA(color || bgColor, 0.2),
			}}>
			{/* @ts-ignore */}

			{typeof icon === "string" ? (
				<IconTag
					primarycolor={color}
					style={{
						color: HEX2RGBA(color || bgColor),
					}}
				/>
			) : (
				icon
			)}
		</div>
	);
};

export default StyledIcon;

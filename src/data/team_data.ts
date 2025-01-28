import sushil from "@/assets/img/teamMember/sushil.png";
import muskan from "@/assets/img/teamMember/muskan.png";
import gautam from "@/assets/img/teamMember/gautam.png";
import aarushi from "@/assets/img/teamMember/aarushi.png";
import anuj from "@/assets/img/teamMember/anuj.png";
import aniket from "@/assets/img/teamMember/aniket.png";


import { StaticImageData } from "next/image";


interface DataType {
	id: number;
	img: StaticImageData;
	avatar_name: string;
	designation: string;
}

const team_data: DataType[] = [
	{
		id: 1,
		img: sushil,
		avatar_name: "Sushil Something",
		designation: "Graphics Designer",
	},
	{
		id: 2,
		img: muskan,
		avatar_name: "Muskan Something",
		designation: "Script Writer",
	},
	{
		id: 3,
		img: gautam,
		avatar_name: "Gautam Something",
		designation: "Video Editor",
	},
	{
		id: 4,
		img: aniket,
		avatar_name: "Chirag Something",
		designation: "Performance Marketer",
	},
	// team data
	{
		id: 5,
		img: anuj,
		avatar_name: "Anuj Something",
		designation: "Video Editor",
	},
	{
		id: 6,
		img: aniket,
		avatar_name: "Aniket Choudhary",
		designation: "Video Editor",
	},
	{
		id: 7,
		img: aniket,
		avatar_name: "Abdus Samad",
		designation: "Web Developer",
	},
	{
		id: 8,
		img: muskan,
		avatar_name: "Harsimar Something",
		designation: "Film Assistant Director",
	},
];

export default team_data;

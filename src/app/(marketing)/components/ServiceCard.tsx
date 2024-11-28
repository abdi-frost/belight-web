import Image from 'next/image';
import serviceImage from '../../../../public/service.png';

interface ServiceCardProps {
    id: string | number;
    title: string;
    description: string;
}

export default function ServiceCard(prop: ServiceCardProps) {
    return (
        <div className="flex flex-col px-8 py-16 rounded-md shadow-lg shadow-primary/15 bg-white">
            <div className="flex justify-center items-center my-2">
                <Image src={serviceImage} alt="Service Icon" width={100} height={100} className="content-fit" />
            </div>
            <div className="my-2 flex justify-center items-center leading-tight">
                <h2 className="w-2/3 text-center text-2xl tracking-wide font-bold">
                    {prop.title}
                </h2>
            </div>
            <div>
                <p className="text-center text-slate-600 leading-tight">
                    {prop.description}
                </p>
            </div>
        </div>
    )
}
import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";

interface CourseCardProps {
  img: string;
  title: string;
  desc: string;
  buttonLabel: string;
}

export function CourseCard({ img, title, desc, buttonLabel }: CourseCardProps) {
  return (
    <Card placeholder="test" color="transparent" shadow={false}>
      <CardHeader placeholder="test" floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image width={768} height={768} src={img} alt={title} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody placeholder="test" className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography placeholder="test" variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography placeholder="test" className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Button placeholder="test" color="gray" size="sm">
          {buttonLabel}
        </Button>
      </CardBody>
    </Card>
  );
}

export default CourseCard;
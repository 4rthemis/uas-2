import { Card, CardContent } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Text } from "../../atoms/Text/Text";
import { Image } from "../../atoms/Image/Image";
import { Icon } from "../../atoms/Icon/Icon";

export const ProjectCard = ({ project, className }) => {
  return (
    <Card
      className={`p-4 sm:p-6 md:p-8 ${project.bgColor} flex flex-col lg:flex-row w-full items-center justify-center gap-4 sm:gap-5 md:gap-6 rounded-2xl sm:rounded-3xl border-none shadow-none hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      <CardContent className="flex flex-col items-start gap-3 sm:gap-4 relative flex-1 p-0 w-full lg:w-auto">
        <div className="flex flex-col items-start gap-3 sm:gap-4 relative self-stretch w-full">
          {project.confidential ? (
            <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 relative self-stretch w-full">
              <Text
                variant="caption"
                className={`${project.categoryColor} whitespace-nowrap`}
              >
                {project.category}
              </Text>
              <div className="flex items-center gap-1.5 relative">
                <div className="relative w-3 h-3 bg-[#eb5f5f] rounded-md" />
                <Badge className="bg-transparent p-0 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ec5f5f] text-sm sm:text-base">
                  Confidential
                </Badge>
              </div>
            </div>
          ) : (
            <Text
              variant="caption"
              className={`${project.categoryColor} w-full`}
            >
              {project.category}
            </Text>
          )}

          <Text variant="h4" className={`${project.textColor} self-stretch`}>
            {project.title}
          </Text>
        </div>

        {project.hasArrow && (
          <Icon
            src="/image/arrow.svg"
            alt="North east"
            size="xl"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          />
        )}
      </CardContent>

      <Image
        src={project.image}
        alt={`${project.title} preview`}
        className="w-full lg:w-[280px] xl:w-[349px] h-[200px] sm:h-[220px] md:h-[250px] lg:h-[275px] rounded-lg"
      />
    </Card>
  );
};

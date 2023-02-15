import { useTranslation } from '../../hooks/useTranslation';
import { EducationHistoryProps } from '../../types/Education/EducationHistoryProps';

export const EducationHistory = ({
  educationHistory,
}: EducationHistoryProps) => {
  const { translation } = useTranslation();
  const getPeriod = (startYear: string, endYear: string | undefined) =>
    endYear !== undefined
      ? `${startYear} - ${endYear}`
      : // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${translation.since} ${startYear}`;
  return (
    <>
      {educationHistory.map(({ endYear, startYear, title, college }, index) => (
        <div className="" key={`education-${index}`}>
          <h5 className="text-xl text-blue-500">{title}</h5>
          <p>
            <a
              href={college.link}
              target="_blank"
              className="text-blue-500 cursor-pointer"
              rel="noreferrer"
            >
              {college.name}
            </a>
          </p>
          <span className="text-blue-700">{getPeriod(startYear, endYear)}</span>
        </div>
      ))}
    </>
  );
};

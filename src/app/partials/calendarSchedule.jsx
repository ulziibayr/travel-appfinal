import Calendar from "../components/calendar/calendar";
import Schedule from "../components/schedule/schedule";

function CalendarSchedule() {
  return (
    <div className="flex flex-col gap-4">
      <div className="xl:w-[370px]">
        <div className="card mb-4 card-border" role="presentation">
          <div className="card-body">
            <Calendar />
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarSchedule;

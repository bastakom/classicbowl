import { getEvents } from "@/lib/actions/get-events";

interface Event {
  id: number;
  name: string;
  slug: string;
  content: {
    content: React.ReactNode;
    Datum: string;
    Time: string;
  };
}

export default async function Page() {
  const events = await getEvents();
  return (
    <div className="container-section my-44">
      {/* Render the calendar component with events as props */}
      <div className="mt-24 flex flex-col gap-2">
        {events.map((item: Event) => {
          const date = new Date(item.content.Datum).toLocaleDateString();
          return (
            <div key={item.id}>
              <div className="flex gap-2 justify-between rounded-md items-end border max-w-[60%] p-5">
                <div>
                  <h2 className="font-bold text-[22px]">{item.name}</h2>
                  <strong className="text-lg">Datum </strong>
                  <p>{date}</p>
                </div>
                {item.content.Time &&
                  <div className="flex flex-col align-end">
                    <strong className="text-lg">Tid </strong>
                    <p>{item.content.Time}</p>
                  </div>
                }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

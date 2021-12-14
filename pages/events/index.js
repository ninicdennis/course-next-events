import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

const EventsPage = () => {
	const events = getAllEvents();
	const router = useRouter();

	const findEventsHandler = (year, month) => {
		router.push(`/events/${year}/${month}`);
	};
	return (
		<Fragment>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList events={events} />
		</Fragment>
	);
};

export default EventsPage;

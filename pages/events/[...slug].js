import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/results-title/results-title';
import { getFilteredEvents } from '../../dummy-data';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert/error-alert';
const SlugEventPage = () => {
	const router = useRouter();
	const { slug } = router.query;

	if (!slug) {
		return <p className='center'>Loading...</p>;
	}

	const filterYear = parseInt(slug[0]);
	const filterMonth = parseInt(slug[1]);

	if (
		isNaN(filterYear) ||
		isNaN(filterMonth) ||
		filterYear > 2030 ||
		filterYear < 2021 ||
		filterMonth < 1 ||
		filterMonth > 12
	) {
		return (
			<Fragment>
				<ErrorAlert>
					<p>Invalid filter!</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show all events</Button>
				</div>
			</Fragment>
		);
	}
	const filteredEvents = getFilteredEvents({ year: filterYear, month: filterMonth });

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<Fragment>
				<ErrorAlert>
					<p>No Events found!</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show all events</Button>
				</div>
			</Fragment>
		);
	}

	const date = new Date(filterYear, filterMonth - 1);

	return (
		<Fragment>
			<ResultsTitle date={date} />
			<EventList events={filteredEvents} />
		</Fragment>
	);
};

export default SlugEventPage;

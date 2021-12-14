import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import Button from '../ui/button';
import styles from './event-item.module.css';

const EventItem = ({ event }) => {
	const { title, image, date, location, id } = event;
	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const formattedAddress = location.replace(', ', '\n');
	return (
		<li className={styles.item}>
			<img src={'/' + image} alt={title} />
			<div className={styles.content}>
				<div className={styles.summary}>
					<h2>{title}</h2>
					<div className={styles.date}>
						<DateIcon />
						<time>{humanReadableDate}</time>
					</div>
					<div className={styles.address}>
						<AddressIcon />
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={styles.actions}>
					<Button link={`/events/${id}`}>
						<span>Explore Event</span>
						<span className={styles.icon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
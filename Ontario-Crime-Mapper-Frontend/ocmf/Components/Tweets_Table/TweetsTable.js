import styles from "./Tweets_Table.module.css";

export default function TweetsTable(tweet) {
  return (
    <>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <th>Status</th>
              <th>Name</th>
              <th>Age</th>
              <th>Updates</th>
              <th>Location</th>
              <th>Tweeted Time</th>
              <th>Image Url</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tweet.props.map((value, key) => {
              return (
                <tr className={styles.tableRow} key={key}>
                  <td className={styles.statusTab}>{value.Status}</td>
                  <td className={styles.nameTab}>{value.Name}</td>
                  <td className={styles.ageTab}>{value.Age}</td>
                  <td className={styles.updatesTab}>{value.Updates}</td>
                  <td className={styles.locationTab}>{value.Location}</td>
                  <td className={styles.tweetedTimeTab}>{value.TweetedTime}</td>
                  <td className={styles.imageTab}>{value.ImageUrl}</td>
                  <td className={styles.descriptionTab}>{value.Description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

import styles from "./Tweets_Table.module.css";

function LocationCheck(location) {
  if (location == undefined) {
    return "No Location Given";
  }
  if (typeof location == "string") {
    return location;
  }
  var longest = location.sort(function (a, b) {
    return b.length - a.length;
  })[0];

  return longest;
}

export default function TweetsTable(tweet) {
  // console.log(tweet)
  return (
    <>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <th className={styles.headerCol}>Status</th>
              <th className={styles.headerCol}>Suspect Information</th>
              <th className={styles.headerCol}>Reported Time</th>
              <th className={styles.headerCol}>Crime Description</th>
            </tr>
          </thead>
          <tbody>
            {tweet.props.map((value, key) => {
              return (
                 <>
                  {!value.Updates ? (<tr className={styles.tableRow} key={key}>
                  <td className={styles.statusTab}>{value.Status}</td>
                  <td className={styles.nameTab}>
                    {value.ImageUrl != "No Image" ? (
                      <>
                        <td>
                          <img
                            className={styles.susImage}
                            src={value.ImageUrl}
                            alt=""
                          />
                        </td>
                      </>
                    ) : (
                      ""
                    )}

                    <td>
                      <b>Name:</b> {value.Name ? value.Name : "Unknown"} <br />{" "}
                      <b>Age:</b> {value.Age ? value.Age : "Unknown"} <br />
                      <b>Location:</b> {LocationCheck(value.Location)}
                    </td>
                  </td>
                  {/* <td className={styles.updatesTab}>{value.Updates}</td> */}
                  <td className={styles.tweetedTimeTab}>{value.TweetedTime}</td>
                  <td className={styles.descriptionTab}>{value.Description}</td>
                  </tr>) : null}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <div className={styles.tableContainer}>
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
                  <td className={styles.locationTab}>{LocationCheck(value.Location)}</td>
                  <td className={styles.tweetedTimeTab}>{value.TweetedTime}</td>
                  <td className={styles.imageTab}>{value.ImageUrl}</td>
                  <td className={styles.descriptionTab}>{value.Description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
    </>
  );
}

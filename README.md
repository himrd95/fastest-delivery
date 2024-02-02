# Fastest Delivery

This code calculates the shortest possible time for a delivery person, Aman, to finish a batch of deliveries between two restaurants and two consumers. It uses the Haversine formula to calculate the distance between two geo-locations and then calculates the travel time based on the average speed.

## Code Explanation

The code consists of the following functions:

-   `calculateDistance(lat1, lon1, lat2, lon2)`: This function calculates the distance between two geo-locations using the Haversine formula.
-   `deg2rad(deg)`: This function converts degrees to radians.
-   `calculateTravelTime(distance)`: This function calculates the time taken to travel a given distance based on the average speed.
-   `findShortestTime(latAman, lonAman, latR1, lonR1, pt1, latR2, lonR2, pt2)`: This function finds the shortest possible time to finish the batch by considering different routes.

The code also includes assumptions for the values of locations and preparation times.

## Usage

To use this code, follow these steps:

1. Set the values for the locations and preparation times in the code.

```
const latAman = 12.971598;
const lonAman = 77.594562;

const latR1 = 12.934516;
const lonR1 = 77.625664;
const pt1 = 0.5; // Restaurant 1 preparation time in hours

const latR2 = 12.908518;
const lonR2 = 77.607324;
const pt2 = 0.7; // Restaurant 2 preparation time in hours
```

2. Run the code.

```
const shortestTime = findShortestTime(
    latAman,
    lonAman,
    latR1,
    lonR1,
    pt1,
    latR2,
    lonR2,
    pt2
);
```

3. The output will display the shortest time to finish the batch.

```
console.log(
    `Shortest time to finish the batch: ${shortestTime.toFixed(2)} hours`
);
```

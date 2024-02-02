// Function to calculate distance between two geo-locations using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
            Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    return distance;
}

// Function to convert degrees to radians
function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

// Function to calculate time taken for Aman to travel between two locations
function calculateTravelTime(distance) {
    const speed = 20; // Average speed in km/hr
    const time = distance / speed; // Time in hours

    return time;
}

// Function to find the shortest possible time to finish the batch
function findShortestTime(
    latAman,
    lonAman,
    latR1,
    lonR1,
    pt1,
    latR2,
    lonR2,
    pt2
) {
    // Calculate travel time for Aman to reach restaurants and consumers
    const travelTimeR1 = calculateTravelTime(
        calculateDistance(latAman, lonAman, latR1, lonR1)
    );
    const travelTimeR2 = calculateTravelTime(
        calculateDistance(latAman, lonAman, latR2, lonR2)
    );

    // Calculate total time for each route and choose the one with the minimum time
    const route1Time =
        pt1 +
        travelTimeR1 +
        pt2 +
        calculateTravelTime(calculateDistance(latR1, lonR1, latR2, lonR2));
    const route2Time =
        pt2 +
        travelTimeR2 +
        pt1 +
        calculateTravelTime(calculateDistance(latR2, lonR2, latR1, lonR1));

    return Math.min(route1Time, route2Time);
}

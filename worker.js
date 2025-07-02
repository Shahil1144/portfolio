self.onmessage = function(e) {
    if (e.data === 'start') {
        setInterval(() => {
            const now = new Date();
            // Countdown based on start date: 2025-07-02T12:06:29+05:45
            const startDate = new Date('2025-07-02T12:06:29+05:45');
            const targetDate = new Date(startDate.getTime() + 182 * 24 * 60 * 60 * 1000 + 12 * 60 * 60 * 1000 + 5 * 60 * 1000 + 29 * 1000);

            const timeDiff = targetDate - now;

            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            if (timeDiff <= 0) {
                self.postMessage({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
            } else {
                self.postMessage({ days, hours, minutes, seconds, expired: false });
            }
        }, 1000);
    }
};

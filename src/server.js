import app from './app.js';

const PORT = process.env.PORT || 3003;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const shutdown = () => {
    server.close(() => {
        console.log('Process terminated');
    });
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
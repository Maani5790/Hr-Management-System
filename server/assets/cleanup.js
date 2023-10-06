//   cleanup Function

cron.schedule('*/2 * * * * *', async () => {
    try {

        console.log('Performing cleanup...');
        const result = await captureModel.deleteMany({});

        console.log(`${result.deletedCount} screenshots deleted in cleanup`);
    } catch (error) {
        console.error('Error cleaning up screenshots:', error);
    }
});
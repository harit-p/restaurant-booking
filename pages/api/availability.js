export default function handler(req, res) {
    const { date } = req.query;
    const availableSlots = ['10:00 AM', '12:00 PM','6:00 PM','8:00 PM','10:00 PM'];
    const bookedSlots = [];
  
    res.status(200).json({
      available: availableSlots.filter((slot) => !bookedSlots.includes(slot)),
      booked: bookedSlots,
    });
  }
  
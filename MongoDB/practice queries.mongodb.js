

use("Practice")

db.orders.aggregate([
    {$match:{year:{$gt:2017}}},

    {$group:{_id:"$year", totalDeliveryDays:{$sum:"$delivery_days"}}}
])
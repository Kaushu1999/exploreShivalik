// Optional: Store leads in a database (MongoDB, Firebase, etc.)
// This is an example schema for reference

// MongoDB Schema Example:
/*
db.leads.insertOne({
  _id: ObjectId(),
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  createdAt: Date,
  status: "new" // or "contacted", "completed"
});
*/

// Firestore Schema Example:
/*
collection: "leads"
document: {
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  createdAt: Timestamp,
  status: String
}
*/

// PostgreSQL Schema Example:
/*
CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'new'
);
*/

// To add database support, update server.js to include:
// 1. Database connection
// 2. Save lead to database before sending emails
// 3. Create endpoints to view/manage leads

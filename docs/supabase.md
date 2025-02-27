
---

### **PostgreSQL: Sample `users` Table**  

```sql
-- Enable pgcrypto extension for secure hashing (if needed)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create the users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    date_registered TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_authenticated BOOLEAN DEFAULT FALSE
);
```

**Improvements:**  
✅ Ensured `username` is unique to prevent duplicates.  
✅ Renamed `isauthenticated` to `is_authenticated` for better readability.  
✅ Commented on `pgcrypto` in case it's needed for password hashing.  

---

### **Supabase Packages (NPM Install)**  

```sh
npm install bcryptjs          # For password hashing
npm install @supabase/supabase-js  # Supabase client SDK
```

**Note:**  
- `bcryptjs` is used for securely hashing passwords before storing them in the database.  
- `@supabase/supabase-js` is the official JavaScript client for interacting with Supabase.  

---

### **`.env` Format (Environment Variables)**  

```sh
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_anon_key
```

**Reminder:**  
🔒 Never expose your Supabase service role key on the client side.  
💡 Use environment variables securely in `.env` files and avoid committing them to version control.  

---
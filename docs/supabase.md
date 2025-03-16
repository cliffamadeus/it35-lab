
---

### **PostgreSQL: Sample `users` Table**  

```sql
-- Enable pgcrypto extension for secure hashing (if needed)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    user_email TEXT NOT NULL UNIQUE,
    user_firstname text,
    user_lastname text,
    user_avatar_url TEXT,
    user_password TEXT NOT NULL,
    date_registered TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

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
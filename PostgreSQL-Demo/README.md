# PostgreSQL-Demo
- This folder is created to study PostgreSQL.

### Useful Resources For PostgreSQL In Ubuntu
- `pgAdmin III` for visualised management (can be found in Ubuntu Software Center)
- [PostgreSQL 9.6.3 OFFICIAL Documentation](https://www.postgresql.org/docs/9.6/static/index.html)
- [Install PostgreSQL on Ubuntu 16.04 AND Basic Command](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04)
- [PostgreSQL Backup Official Doc](https://www.postgresql.org/docs/9.1/static/backup-dump.html)
- [pg-dump Backup](https://www.digitalocean.com/community/tutorials/how-to-backup-postgresql-databases-on-an-ubuntu-vps)
- [psql Table Management](https://www.digitalocean.com/community/tutorials/how-to-create-remove-manage-tables-in-postgresql-on-a-cloud-server)

### Useful Command In Ubuntu Terminal
- Switch to `postgres` account (require authentication)

        sudo -i -u postgres  
        sudo su postgres    // Alternatively
- Access command-line interface to PostgreSQL

        psql
- Quit `postgres` account

        Press CTRL+D 
- Quit PostgreSQL command-line interface

        \q 
- Get current connection infomation

        \conninfo
- Get List of databases

        \l
- Get List of roles

        \du
- Get list of relations (tables)

        \d
        \dt     // without sequence
- Get settings of a table

        \d your_table_name_goes_here
- Clear screen in `psql`

        \! clear
        CTRL+L  // Alternatively
- Create a new role

        Under `psql` mode:
            
                CREATE USER test_user WITH PASSWORD 'test_password123';
                
        Under `postgres` account: 
            
                createuser --interactive;



### Quick Note
1. The `psql` mode allows multiple lines input until you enter a semicolon

2. The `psql` has corresponding feedback when you entered correct command

3. Semicolon (;) is necessary for a complete command

4. When you accidentally entered a false command, try pressing `CTRL+C`

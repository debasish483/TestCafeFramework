//Load the mssql module so that Sql server can be connected for performing Read/Write operations.
var sql = require("mssql");

//config object with Sql Server connection properties
var config = {
    user: 'sa', //SQL User Id. Please provide a valid user
    password: 'Password123', //SQL Password. Please provide a valid password
    server: 'ADMIN\\SQLEXPRESS',
    options: {
      database: 'master' //You can use any database here
  }
 
}

export default class SqlServer 
{
    //Method used to read any table of the master Database.
    pullDataFromDatabase(SqlQuery:string) { 

        return new Promise(async function(resolve, reject)
        {
            try
            {
                var conn;
                conn = await new sql.ConnectionPool(config); //Query Database
                await conn.connect()
                var results = await conn.request().query(SqlQuery);
                resolve(results.recordsets);
                //console.log(results.recordsets);
            }
            catch (err)
            {
                console.log('Error Occured', err);
                reject(err);
            }
            finally 
            {
                if(conn)
                {
                    try{
                        await conn.close();
                        console.log('Connection Closed');
                    }
                    catch (err)
                    {
                        console.log('Error closing connection', err);
                    }
                }
            }
        });
    
    
    }
}

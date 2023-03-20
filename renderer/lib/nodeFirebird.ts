import Firebird from 'node-firebird'
import { FirebirdConn } from '../utils/interfaces/FirebirdConn'

export const nodeFirebird = (query: string):any => {
  const connectionString:FirebirdConn = {
    host: `127.0.0.1`,
    port: 3050,
    database: 'C:\\app\\Siscone\\Siscone.FDB',
    user: 'SYSDBA',
    password: 'masterkey'
  }
  return new Promise((resolve, reject) => {
    Firebird.attach(connectionString,(err, db) => {
      if(err) {
        console.log(err, 'on localhost')
        return
      }

      db.query(query, [],(err, result) => err? console.log(err) : resolve(result))
      db.detach()
    })
  })
}

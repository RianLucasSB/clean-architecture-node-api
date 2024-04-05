import { type AccountModel, type AddAccount, type AddAccountModel, type Encrypter, type AddAccountRepository } from './db-add-account-protocols'

export class DbAddAcount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository

  constructor (encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return await new Promise(resolve => { resolve({} as AccountModel) })
  }
}

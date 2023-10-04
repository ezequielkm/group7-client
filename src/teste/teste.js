// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Teste2', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Teste2', async function() {
    await driver.get("http://localhost:4200/login?returnUrl=%2F")
    await driver.manage().window().setRect({ width: 1296, height: 696 })
    await driver.sleep(3000)
    await driver.findElement(By.css(".mb-3:nth-child(1) > .form-control")).click()
    await driver.findElement(By.xpath("//input[@formcontrolname=\'username\']")).sendKeys("katia")
    await driver.findElement(By.css(".ng-untouched")).click()
    await driver.findElement(By.xpath("//input[@formcontrolname=\'password\']")).sendKeys("123")
    await driver.findElement(By.css(".buttonStyle:nth-child(1)")).click()
    {
      const element = await driver.findElement(By.css(".buttonStyle:nth-child(1)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".buttonStyle:nth-child(1)")).click()
    {
      const element = await driver.findElement(By.css(".buttonStyle:nth-child(1)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css(".btn-danger")).click()
    await driver.findElement(By.linkText("Estoque")).click()
    {
      const element = await driver.findElement(By.linkText("Estoque"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.linkText("Produto")).click()
    {
      const element = await driver.findElement(By.linkText("Produto"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css(".btn-success")).click()
    await driver.findElement(By.id("nome")).click()
    await driver.findElement(By.id("nome")).sendKeys("Carne picanha")
    await driver.findElement(By.id("tipoProduto")).click()
    {
      const dropdown = await driver.findElement(By.id("tipoProduto"))
      await dropdown.findElement(By.xpath("//option[. = 'Carnes']")).click()
    }
    await driver.findElement(By.css(".btn-success:nth-child(4)")).click()
    await driver.findElement(By.css(".btn-success")).click()
    {
      const element = await driver.findElement(By.css(".btn-success"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.id("nome")).click()
    await driver.findElement(By.id("nome")).sendKeys("Kit novo")
    await driver.findElement(By.id("tipoProduto")).click()
    {
      const dropdown = await driver.findElement(By.id("tipoProduto"))
      await dropdown.findElement(By.xpath("//option[. = 'Kit']")).click()
    }
    await driver.findElement(By.css(".btn-success:nth-child(4)")).click()
    {
      const element = await driver.findElement(By.css("tr:nth-child(3) .btn"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".btn-success")).click()
    {
      const element = await driver.findElement(By.css(".btn-success"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.id("nome")).click()
    await driver.findElement(By.id("nome")).sendKeys("Acessório: espeto")
    await driver.findElement(By.id("tipoProduto")).click()
    {
      const dropdown = await driver.findElement(By.id("tipoProduto"))
      await dropdown.findElement(By.xpath("//option[. = 'Acessórios']")).click()
    }
    await driver.findElement(By.css(".btn-success:nth-child(4)")).click()
    await driver.findElement(By.css("tr:nth-child(1) .btn")).click()
    assert(await driver.switchTo().alert().getText() == "Deseja excluir o registro?")
    await driver.switchTo().alert().accept()
    await driver.findElement(By.linkText("Estoque")).click()
    await driver.findElement(By.css(".btn-success")).click()
    {
      const element = await driver.findElement(By.css(".btn-success"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css("div:nth-child(1) > .btn-success")).click()
    {
      const element = await driver.findElement(By.css("div:nth-child(1) > .btn-success"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css("tr:nth-child(12) > td:nth-child(1)")).click()
    await driver.findElement(By.id("quantidade")).click()
    await driver.findElement(By.id("quantidade")).sendKeys("5")
    await driver.findElement(By.id("preco")).sendKeys("60")
    await driver.findElement(By.css("div:nth-child(8) > .btn-success")).click()
    await driver.findElement(By.css(".btn-success")).click()
    await driver.findElement(By.css("div:nth-child(1) > .btn-success")).click()
    {
      const element = await driver.findElement(By.css("div:nth-child(1) > .btn-success"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css("tr:nth-child(11) > td:nth-child(1)")).click()
    await driver.findElement(By.id("quantidade")).click()
    await driver.findElement(By.id("quantidade")).sendKeys("10")
    await driver.findElement(By.id("preco")).click()
    await driver.findElement(By.id("preco")).sendKeys("90")
    await driver.findElement(By.css("div:nth-child(8) > .btn-success")).click()
    await driver.findElement(By.css(".btn-link")).click()
  })
})
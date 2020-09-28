package stepdefinitions;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import pages.GooglePage;
import utilities.Driver;

public class GoogleAramaStepdefinitions {
    GooglePage googlePage=new GooglePage();
    @Given("kullanici google sayfasina gider")
    public void kullanici_google_sayfasina_gider() {
        System.out.println("Kullanıcı Google'a gitti.");
        Driver.getDriver().get("http://www.google.com/");
    }
    @Given("arama kutusuna techproeducation yazar")
    public void arama_kutusuna_techproeducation_yazar() throws InterruptedException {
        System.out.println("Kullanıcı techproeducation yazdı.");
       googlePage.googleAramaKutusu.sendKeys("techproeducation"+Keys.ENTER);
       Thread.sleep(3000);

    }
    @Then("arama sonuclari sayfasinin basligini kontrol eder")
    public void arama_sonuclari_sayfasinin_basligini_kontrol_eder() {
        System.out.println("Kullanıcı swayfa başlığını test etti.");
        String baslik=Driver.getDriver().getTitle();
        boolean iceriyormu=baslik.contains("techproeducation");
        Assert.assertTrue(iceriyormu);


    }
    @Given("arama kutusuna selenium yazar")
    public void arama_kutusuna_selenium_yazar() {
        System.out.println("Kullanıcı selenium yazar.");
        googlePage.googleAramaKutusu.sendKeys("selenium"+ Keys.ENTER);
    }
    @Then("arama sonuclari sayfasinin sonuc sayisini kontrol eder")
    public void arama_sonuclari_sayfasinin_sonuc_sayisini_kontrol_eder() {
        System.out.println("Kullanıcı sonuç sayısını test etti.");
       String result= googlePage.seleniumSonuc.getText();
        System.out.println(result);

    }
    @Given("kullanici webdriver kelimesi arar {string}")
    public void kullanici_webdriver_kelimesi_arar(String string) {
        googlePage.googleAramaKutusu.sendKeys(string+Keys.ENTER);
    }

    @Then("klullanici sayfa basliginda webdriver kontrol eder {string}")
    public void klullanici_sayfa_basliginda_webdriver_kontrol_eder(String string) {
        String baslik=Driver.getDriver().getTitle();
        boolean icindeMi=baslik.contains(string);
        Assert.assertTrue(icindeMi);

    }
    @Given("kullanici {string} arar")
    public void kullanici_arar(String string) throws InterruptedException {
       googlePage.googleAramaKutusu.sendKeys(string+Keys.ENTER);
       Thread.sleep(3000);
    }

    @Then("kullici sayfa basliginda {string} kontrol eder")
    public void kullici_sayfa_basliginda_kontrol_eder(String string) {
        String baslik=Driver.getDriver().getTitle();
        boolean icindeVarmi=baslik.contains(string);
        Assert.assertTrue(icindeVarmi);
    }




}
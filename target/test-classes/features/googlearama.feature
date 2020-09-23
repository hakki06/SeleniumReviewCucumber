@feature
Feature: Google arama
  Background:
    Given kullanici google sayfasina gider


  @techpro
  Scenario: TC01_kullanici googleda techproeducation aramasi yapar

    And arama kutusuna techproeducation yazar
    Then arama sonuclari sayfasinin basligini kontrol eder
@selenium
  Scenario: TC02_kullanici googleda selenium aramasi yapar

    And arama kutusuna selenium yazar
    Then arama sonuclari sayfasinin sonuc sayisini kontrol eder


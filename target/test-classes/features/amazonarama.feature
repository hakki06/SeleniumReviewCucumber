Feature: Amazon Urun Arama
  @amazonurunarama
  Scenario Outline: TC06_kullanici amazonda urun aramasi yapar
    Given kullanici "http://amazon.com" sayfaya gider
    And kullanici arama kutusuna "<kelime>" yazar
    Then kullanici sonuc sayisini ekrana yazdirir
    Examples:
      | kelime |
      | headphones |
      | tv |
      | sponge |



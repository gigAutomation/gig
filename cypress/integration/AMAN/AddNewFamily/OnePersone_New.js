/// <reference types="cypress" />

describe("add new value", () => {
  before("login", () => {
    cy.visit("https://oneit.website/Aman-OnePerson-Request");
  });
  describe("Design and validation Test", () => {
    describe("For Jordanian AR", () => {
      it("the part of the web form Add new family / إنشاء بوليصة أمان - عائلة جديدة", () => {
        it("Verify that the label name of the form should be content (إنشاء بوليصة أمان - عائلة جديدة)", () => {
          cy.contains("إنشاء بوليصة أمان - عائلة جديدة").should("be.visible");
        });
      });
      //Basic Information
      it("verify that should the web form start with the (المعلومات الاساسية) and the label should contain: المعلومات الاساسية", () => {
        cy.contains("المعلومات الأساسية").should("be.visible");
      });
      describe("verify that the Basic Information should contain the Nationality Drop-down field", () => {
        it("verify that the Basic Information should contain radio button with title name هل تحمل الجنسية الأردنية؟", () => {
          cy.contains("هل تحمل الجنسية الأردنية؟ ").should("be.visible");
        });
        it("verify that should have a star on the red color beside the field of the هل تحمل الجنسية الأردنية؟ ", () => {
          cy.get(
            "#ctl00_ContentPlaceHolder1_pnlForm > :nth-child(3) > :nth-child(1) > .fa"
          )
            .should("be.visible")
            .and("have.css", "color", "rgb(255, 0, 0)");
        });
        it("Verify that should the filed of the هل تحمل الجنسية الأردنية have option نعم )", () => {
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality")
            .contains("نعم")
            .should("be.visible");
        });
        it("Verify that should the filed of the هل تحمل الجنسية الأردنية have option لا )", () => {
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality")
            .contains("لا")
            .should("be.visible");
        });
        it("Verify that the option (نعم) of the nationality should be with type radio button", () => {
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").should(
            "have.attr",
            "type",
            "radio"
          );
        });
        it("Verify that the nationality by default should be نعم (yes jordanian)", () => {
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").should(
            "have.attr",
            "checked",
            "checked"
          );
        });
        it("Verify that the option (لا) of the nationality should be with type radio button", () => {
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_1").should(
            "have.attr",
            "type",
            "radio"
          );
        });
      });
      describe("verify that the Basic Information should contain the National number / رقم الوطني ", () => {
        it("Verify that the label of the nationality field contain: الرقم الوطني", () => {
          cy.get("#divNationalId").contains("رقم وطني").should("be.visible");
        });
        it("Verify that the resident no field should not be visible if the user jordanian", () => {
          cy.get(
            "#select2-ctl00_ContentPlaceHolder1_ddlNationality-container"
          ).should("not.be.visible");
        });
        it("Verify that should be star with red color beside the national no", () => {
          cy.get("#divNationalId > .form-group > label > .fa").should(
            "be.visible"
          );
        });
        it("Verify that the star that exist beside the national number should be in red color", () => {
          cy.get("#divNationalId > .form-group > label > .fa").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it("Verify that the National No filed should not be with color red once open the form", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtNationalId").should(
            "not.have.attr",
            "style",
            "color: Red;visibility: hidden;"
          );
        });
        it("Verify that should be validate message appear once the user fill incorrect data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtNationalId").type("amer");
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get(
            "#ctl00_ContentPlaceHolder1_RegularExpressionValidator13"
          ).should("be.visible");
          cy.contains("الرقم الوطني غير صحيح").should("be.visible");
        });
        it("reload the page", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtNationalId").clear();
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
        });
        it("Verify that should the national no field take just number", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtNationalId").should(
            "have.attr",
            "maxlength",
            "10"
          );
        });
        it("Verify that the national no field should not be in the red color", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtNationalId").should(
            "not.have.attr",
            "class",
            "errorlbl"
          );
        });
      });
      describe("Verify that the basic information should contain Arabic FIRST name filed", () => {
        it("Verify that should appear star beside the Arabic First name field and should be in red color", () => {
          cy.get("#reqStarArFirstName").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it('Verify that the first name Ar field should be with name "الاسم الاول بالعربي "', () => {
          cy.get(
            ":nth-child(6) > .col-sm-12 > :nth-child(1) > .form-group > label"
          )
            .contains("الاسم الاول بالعربي")
            .should("be.visible");
        });
        it("Verify that the Arabic first name field should not be in red color in the first try", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArFirstName").should(
            "be.empty"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtArFirstName").should(
            "not.have.attr",
            "class",
            "errorlbl"
          );
        });
        it("Verify that the Arabic first name should take just 20 char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArFirstName").should(
            "have.attr",
            "maxlength",
            "20"
          );
        });
        it("Verify that the Arabic first name should be Right to lift", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArFirstName").should(
            "have.attr",
            "dir",
            "rtl"
          );
        });
        it("Verify that the field first name Ar should accept only Arabic char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArFirstName").should(
            "have.attr",
            "type",
            "text"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtArFirstName").should(
            "have.attr",
            "onkeyup",
            "arabicValue(ctl00_ContentPlaceHolder1_txtArFirstName)"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtArFirstName").type("uhlv");
          cy.get("#ctl00_ContentPlaceHolder1_txtArFirstName").should(
            "have.value",
            "عامر"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtArFirstName").clear();
        });
        it("Verify that the first name Ar should appear validate message when fill incorrect data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArFirstName").type("uhlv_@-=");
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator35")
            .contains("الاسم غير صحيح")
            .should("be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtArFirstName").clear();
        });
        it("Verify that the first name Ar should disappear the validate message when fill correct data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArFirstName").type("عامر");
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator35")
            .contains("الاسم غير صحيح")
            .should("not.be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtArFirstName").clear();
        });
      });
      describe("Verify that the basic information should contain Arabic SECOND name filed", () => {
        it("Verify that should appear star beside the Arabic Second name field and should be in red color", () => {
          cy.get("#reqStarArSecondName").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it('Verify that the field Second name Ar should be with name "الاسم الثاني بالعربي "', () => {
          cy.get(
            ":nth-child(6) > .col-sm-12 > :nth-child(2) > .form-group > label"
          )
            .contains("الاسم الثاني بالعربي")
            .should("be.visible");
        });
        it("Verify that the Arabic Second name field should not be in red color in the first try", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArSecondName").should(
            "be.empty"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtArSecondName").should(
            "not.have.attr",
            "class",
            "errorlbl"
          );
        });
        it("Verify that the Arabic Second name should take just 20 char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArSecondName").should(
            "have.attr",
            "maxlength",
            "20"
          );
        });
        it("Verify that the Arabic Second name should be Right to lift", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArSecondName").should(
            "have.attr",
            "dir",
            "rtl"
          );
        });
        it("Verify that the field Second name Ar should accept only Arabic char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArSecondName").should(
            "have.attr",
            "type",
            "text"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtArSecondName").should(
            "have.attr",
            "onkeyup",
            "arabicValue(ctl00_ContentPlaceHolder1_txtArSecondName)"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtArSecondName").type("uhlv");
          cy.get("#ctl00_ContentPlaceHolder1_txtArSecondName").should(
            "have.value",
            "عامر"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtArSecondName").clear();
        });
        it("Verify that the Second name Ar should appear validate message when fill incorrect data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArSecondName").type("uhlv_@-=");
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator36")
            .contains("الاسم غير صحيح")
            .should("be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtArSecondName").clear();
        });
        it("Verify that the Second name Ar should disappear the validate message when fill correct data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArSecondName").type("عامر");
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator36")
            .contains("الاسم غير صحيح")
            .should("not.be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtArSecondName").clear();
        });
      });
      describe("Verify that the basic information should contain Arabic THIRD name filed", () => {
        it("Verify that should appear star beside the Arabic Third name field and should be in red color", () => {
          cy.get("#reqStarArFirstName").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it('Verify that the field Third name Ar should be with name "الاسم الثالث بالعربي "', () => {
          cy.get(
            ":nth-child(6) > .col-sm-12 > :nth-child(3) > .form-group > label"
          )
            .contains("الاسم الثالث بالعربي")
            .should("be.visible");
        });
        it("Verify that the Arabic Third name field should not be in red color in the first try", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArThirdName").should(
            "be.empty"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtArThirdName").should(
            "not.have.attr",
            "class",
            "errorlbl"
          );
        });
        it("Verify that the Arabic Third name should take just 20 char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArThirdName").should(
            "have.attr",
            "maxlength",
            "20"
          );
        });
        it("Verify that the Arabic Third name should be Right to lift", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArThirdName").should(
            "have.attr",
            "dir",
            "rtl"
          );
        });
        it("Verify that the field Third name Ar should accept only Arabic char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArThirdName").should(
            "have.attr",
            "type",
            "text"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtArThirdName").should(
            "have.attr",
            "onkeyup",
            "arabicValue(ctl00_ContentPlaceHolder1_txtArThirdName)"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtArThirdName").type("uhlv");
          cy.get("#ctl00_ContentPlaceHolder1_txtArThirdName").should(
            "have.value",
            "عامر"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtArThirdName").clear();
        });
        it("Verify that the Third name Ar should appear validate message when fill incorrect data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArThirdName").type("uhlv_@-=");
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator37")
            .contains("الاسم غير صحيح")
            .should("be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtArThirdName").clear();
        });
        it("Verify that the Third name Ar should disappear the validate message when fill correct data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArThirdName").type("عامر");
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator37")
            .contains("الاسم غير صحيح")
            .should("not.be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtArThirdName").clear();
        });
      });
      describe("Verify that the basic information should contain Arabic LAST name filed", () => {
        it("Verify that should appear star beside the Arabic Last name field and should be in red color", () => {
          cy.get("#reqStarArLastName").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it('Verify that the field Last name Ar should be with name "اسم العائلة بالعربي "', () => {
          cy.get(
            ":nth-child(6) > .col-sm-12 > :nth-child(4) > .form-group > label"
          )
            .contains("اسم العائلة بالعربي")
            .should("be.visible");
        });
        it("Verify that the Arabic Last name field should not be in red color in the first try", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArLastName").should("be.empty");
          cy.get("#ctl00_ContentPlaceHolder1_txtArLastName").should(
            "not.have.attr",
            "class",
            "errorlbl"
          );
        });
        it("Verify that the Arabic Last name should take just 20 char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArLastName").should(
            "have.attr",
            "maxlength",
            "20"
          );
        });
        it("Verify that the Arabic Last name should be Right to lift", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArLastName").should(
            "have.attr",
            "dir",
            "rtl"
          );
        });
        it("Verify that the field Last name Ar should accept only Arabic char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArLastName").should(
            "have.attr",
            "type",
            "text"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtArLastName").should(
            "have.attr",
            "onkeyup",
            "arabicValue(ctl00_ContentPlaceHolder1_txtArLastName)"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtArLastName").type("uhlv");
          cy.get("#ctl00_ContentPlaceHolder1_txtArLastName").should(
            "have.value",
            "عامر"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtArLastName").clear();
        });
        it("Verify that the Last name Ar should appear validate message when fill incorrect data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArLastName").type("uhlv_@-=");
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator4")
            .contains("الاسم غير صحيح")
            .should("be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtArLastName").clear();
        });
        it("Verify that the Last name Ar should disappear the validate message when fill correct data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtArLastName").type("عامر");
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator4")
            .contains("الاسم غير صحيح")
            .should("not.be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtArLastName").clear();
        });
      });
      describe("Verify that the basic information should contain English FIRST name filed", () => {
        it("Verify that should appear star beside the English First name field and should be in red color", () => {
          cy.get("#reqStarEnFirstName").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it('Verify that the field first name En should be with name "الاسم الاول بالانجليزي "', () => {
          cy.get(
            ":nth-child(7) > .col-sm-12 > :nth-child(1) > .form-group > label"
          )
            .contains("الاسم الاول بالانجليزي")
            .should("be.visible");
        });
        it("Verify that the English first name field should not be in red color in the first try", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnFirstName").should(
            "be.empty"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtEnFirstName").should(
            "not.have.attr",
            "class",
            "errorlbl"
          );
        });
        it("Verify that the English first name should take just 20 char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnFirstName").should(
            "have.attr",
            "maxlength",
            "20"
          );
        });
        it("Verify that the English first name should be Lift to Right", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnFirstName").should(
            "have.attr",
            "dir",
            "ltr"
          );
        });
        it("Verify that the field first name En should accept only English char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnFirstName").should(
            "have.attr",
            "type",
            "text"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtEnFirstName").should(
            "have.attr",
            "onkeyup",
            "englishValue(ctl00_ContentPlaceHolder1_txtEnFirstName)"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtEnFirstName").type("شةثق");
          cy.get("#ctl00_ContentPlaceHolder1_txtEnFirstName").should(
            "have.value",
            "AMER"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtEnFirstName").clear();
        });
        it("Verify that the first name En should appear validate message when fill incorrect data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnFirstName").type(
            "نعشسليب_@-="
          );
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator5")
            .contains("الاسم غير صحيح")
            .should("be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtEnFirstName").clear();
        });
        it("Verify that the first name En should disappear the validate message when fill correct data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnFirstName").type("amer");
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator5")
            .contains("الاسم غير صحيح")
            .should("not.be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtEnFirstName").clear();
        });
      });
      describe("Verify that the basic information should contain English Second name filed", () => {
        it("Verify that should appear star beside the English Second name field and should be in red color", () => {
          cy.get("#reqStarEnSecondName").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it('Verify that the field Second name En should be with name "الاسم الثاني بالانجليزي "', () => {
          cy.get(
            ":nth-child(7) > .col-sm-12 > :nth-child(2) > .form-group > label"
          )
            .contains("الاسم الثاني بالانجليزي")
            .should("be.visible");
        });
        it("Verify that the English Second name field should not be in red color in the Second try", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnSecondName").should(
            "be.empty"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtEnSecondName").should(
            "not.have.attr",
            "class",
            "errorlbl"
          );
        });
        it("Verify that the English Second name should take just 20 char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnSecondName").should(
            "have.attr",
            "maxlength",
            "20"
          );
        });
        it("Verify that the English Second name should be Lift to Right", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnSecondName").should(
            "have.attr",
            "dir",
            "ltr"
          );
        });
        it("Verify that the field Second name En should accept only English char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnSecondName").should(
            "have.attr",
            "type",
            "text"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtEnSecondName").should(
            "have.attr",
            "onkeyup",
            "englishValue(ctl00_ContentPlaceHolder1_txtEnSecondName)"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtEnSecondName").type("شةثق");
          cy.get("#ctl00_ContentPlaceHolder1_txtEnSecondName").should(
            "have.value",
            "AMER"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtEnSecondName").clear();
        });
        it("Verify that the Second name En should appear validate message when fill incorrect data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnSecondName").type(
            "نعشسليب_@-="
          );
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator6")
            .contains("الاسم غير صحيح")
            .should("be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtEnSecondName").clear();
        });
        it("Verify that the Second name En should disappear the validate message when fill correct data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnSecondName").type("amer");
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator6")
            .contains("الاسم غير صحيح")
            .should("not.be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtEnSecondName").clear();
        });
      });
      describe("Verify that the basic information should contain English Third name filed", () => {
        it("Verify that should appear star beside the English Third name field and should be in red color", () => {
          cy.get("#reqStarEnThirdName").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it('Verify that the field Third name En should be with name "الاسم الثالث بالانجليزي "', () => {
          cy.get(
            ":nth-child(7) > .col-sm-12 > :nth-child(3) > .form-group > label"
          )
            .contains("الاسم الثالث بالانجليزي")
            .should("be.visible");
        });
        it("Verify that the English Third name field should not be in red color in the Third try", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnThirdName").should(
            "be.empty"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtEnThirdName").should(
            "not.have.attr",
            "class",
            "errorlbl"
          );
        });
        it("Verify that the English Third name should take just 20 char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnThirdName").should(
            "have.attr",
            "maxlength",
            "20"
          );
        });
        it("Verify that the English Third name should be Right to lift", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnThirdName").should(
            "have.attr",
            "dir",
            "ltr"
          );
        });
        it("Verify that the field Third name En should accept only English char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnThirdName").should(
            "have.attr",
            "type",
            "text"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtEnThirdName").should(
            "have.attr",
            "onkeyup",
            "englishValue(ctl00_ContentPlaceHolder1_txtEnThirdName)"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtEnThirdName").type("شةثق");
          cy.get("#ctl00_ContentPlaceHolder1_txtEnThirdName").should(
            "have.value",
            "AMER"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtEnThirdName").clear();
        });
        it("Verify that the Third name En should appear validate message when fill incorrect data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnThirdName").type(
            "hgfh==--@-="
          );
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator9")
            .contains("الاسم غير صحيح")
            .should("be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtEnThirdName").clear();
        });
        it("Verify that the Third name En should disappear the validate message when fill correct data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnThirdName").type("amer");
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator9")
            .contains("الاسم غير صحيح")
            .should("not.be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtEnThirdName").clear();
        });
      });
      describe("Verify that the basic information should contain English Last name filed", () => {
        it("Verify that should appear star beside the English Last name field and should be in red color", () => {
          cy.get("#reqStarEnLastName").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it('Verify that the field Last name En should be with name "اسم الثاني بالانجليزي "', () => {
          cy.get(
            ":nth-child(7) > .col-sm-12 > :nth-child(4) > .form-group > label"
          )
            .contains("اسم العائلة بالانجليزي")
            .should("be.visible");
        });
        it("Verify that the English Last name field should not be in red color in the Last try", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnLastName").should("be.empty");
          cy.get("#ctl00_ContentPlaceHolder1_txtEnLastName").should(
            "not.have.attr",
            "class",
            "errorlbl"
          );
        });
        it("Verify that the English Last name should take just 20 char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnLastName").should(
            "have.attr",
            "maxlength",
            "20"
          );
        });
        it("Verify that the English Last name should be Lift to Right", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnLastName").should(
            "have.attr",
            "dir",
            "ltr"
          );
        });
        it("Verify that the field Last name En should accept only English char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnLastName").should(
            "have.attr",
            "type",
            "text"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtEnLastName").should(
            "have.attr",
            "onkeyup",
            "englishValue(ctl00_ContentPlaceHolder1_txtEnLastName)"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtEnLastName").type("شةثق");
          cy.get("#ctl00_ContentPlaceHolder1_txtEnLastName").should(
            "have.value",
            "AMER"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtEnLastName").clear();
        });
        it("Verify that the Last name En should appear validate message when fill incorrect data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnLastName").type(
            "نعشسليب_@-="
          );
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator10")
            .contains("الاسم غير صحيح")
            .should("be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtEnLastName").clear();
        });
        it("Verify that the Last name En should disappear the validate message when fill correct data ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEnLastName").type("amer");
          cy.get("#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator10")
            .contains("الاسم غير صحيح")
            .should("not.be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtEnLastName").clear();
        });
      });
      describe("Verify that the basic information should contain identity type field", () => {
        it("Verify that the identity type should have label نوع الوثيقة ", () => {
          cy.get("#divJoIdentityType > .form-group > label").contains(
            "نوع الوثيقة"
          );
        });
        it("Verify that should appear star beside the identity type field and should be in red color", () => {
          cy.get(":nth-child(21) > .form-group > label > .fa").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it("Verify that the identity type field should be mandatory and have attr errorlbl", () => {
          cy.get("#ctl00_ContentPlaceHolder1_ddlJoIdentityType").should(
            "not.have.attr",
            "class",
            "errorlbl"
          );
        });
        it("Verify that the identity type should be mandatory and the color of the field should not be in the red", () => {
          cy.get("#ctl00_ContentPlaceHolder1_ddlJoIdentityType").should(
            "not.have.attr",
            "style",
            "visibility:visible;"
          );
        });
        it("Verify that the identity type should be mandatory and should be in the red color if the user not fill the field", () => {
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get("#ctl00_ContentPlaceHolder1_rfvddlJoIdentityType").should(
            "have.attr",
            "style",
            "color: red; visibility: visible;"
          );
          cy.reload();
        });
        it("Verify that should the identity type field should be Drop-Down and have three value and (please select by default)", () => {
          cy.get("#ctl00_ContentPlaceHolder1_ddlJoIdentityType")
            .children("option")
            .then((options) => {
              const actual = [...options].map((o) => o.value);
              expect(actual).to.deep.eq(["0", "1.0", "2.0"]);
            });
        });
        it("Verify that the identity type field by default should be (اختر من القائمة)", () => {
          cy.get("#ctl00_ContentPlaceHolder1_ddlJoIdentityType")
            .select("اختر من القائمة")
            .should("have.value", "0")
            .and("be.visible");
        });
        it("Verify that if the identity type value is 0 should not appear the ducument number field", () => {
          cy.get("#ctl00_ContentPlaceHolder1_ddlJoIdentityType")
            .select("اختر من القائمة")
            .should("have.value", "0")
            .and("be.visible");
          cy.get("#divJoDocumentID > .form-group").should("not.be.visible");
        });
        it("Verify that if the identity type value is 0 should not appear the Passport number field", () => {
          cy.get("#ctl00_ContentPlaceHolder1_ddlJoIdentityType")
            .select("اختر من القائمة")
            .should("have.value", "0")
            .and("be.visible");
          cy.get("#divJoPassportNo").should("not.be.visible");
        });
        it("Verify that if the user select the رقم وطني should appear the ducument number field", () => {
          cy.get("#ctl00_ContentPlaceHolder1_ddlJoIdentityType")
            .select("رقم وطني")
            .should("have.value", "1.0");
          cy.get("#divJoDocumentID > .form-group").should("be.visible");
        });
        it("Verify that if the user select the جواز السفر should appear the ducument number field", () => {
          cy.get("#ctl00_ContentPlaceHolder1_ddlJoIdentityType")
            .select("اختر من القائمة")
            .select("جواز سفر")
            .should("have.value", "2.0");
          cy.get("#divJoPassportNo").should("be.visible");
        });
      });
      describe("Verify that the basic information should contain Issuence place field", () => {
        it("Verify that the issuenc place should have title name مكان الاصدار", () => {
          cy.get("#divddlIssuingPlace > .form-group > label").should(
            "contain.text",
            "مكان الإصدار"
          );
        });
        it("Verify that should appear star beside the issuenc place field and should be in red color", () => {
          cy.get("#divddlIssuingPlace > .form-group > label .fa").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it("Verify that the issuenc place field should be mandatory and have attr errorlbl", () => {
          cy.get(
            "#select2-ctl00_ContentPlaceHolder1_ddlIssuingPlace-container"
          ).should("not.have.attr", "class", "errorlbl");
        });
        it("Verify that the issuenc place should be mandatory and the color of the field should not be in the red", () => {
          cy.get(
            "#select2-ctl00_ContentPlaceHolder1_ddlIssuingPlace-container"
          ).should("not.have.attr", "style", "visibility:visible;");
        });
        it("Verify that the issuenc place should be mandatory and should be in the red color if the user not fill the field", () => {
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get("#ctl00_ContentPlaceHolder1_rfvtxtIssuingPlace").should(
            "have.attr",
            "style",
            "color:Red;visibility:hidden;"
          );
          cy.reload();
        });
        it("Verify that the issuenc place should the contant be Lift to right", () => {
          cy.get(
            "#select2-ctl00_ContentPlaceHolder1_ddlIssuingPlace-container"
          ).should("not.have.attr", "dir", "ltr");
        });
        it("Verify that the issuenc place should by default be اختر من القائمة", () => {
          cy.get(
            "#select2-ctl00_ContentPlaceHolder1_ddlIssuingPlace-container"
          ).should("have.attr", "title", "اختر من القائمة");
        });
        it("Verify that the issuence place filed should be drop down list", () => {
          /*    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','جبل الاخضر')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الوحدات')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','العبدلي')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الجاردنز')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الصويفيه')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','صويلح')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','وادي السير')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','مرج الحمام')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','البقعة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','تلاع العلي')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','جبل عمان')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الدوار الثالث')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','جبل النصر')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','اللويبده')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','وسط البلد')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ام أذينة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ضاحية الرشيد')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','أم السماق')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','المقابلين')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ماركا الشمالية')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','المدينة الرياضية')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ضاحية الأمير راشد')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','المدينة الطبية')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','حي نزال')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','وادي صقرة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','جبل النزهة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','عمان')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ضاحية الحسين')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الدوار السادس') 
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','شارع مكة المكرمة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الجامعة الأردنية')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الجبيهه')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','عبدون')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','القويسمة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الجويدة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','المهاجرين')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','حي الرشيد')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','جبل التاج')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الهاشمي الشمالي')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الهاشمي الجنوبي')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ناعور')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain',' الرابية')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','شارع الاستقلال')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','شارع القدس')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','المحطة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الاشرفية')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','دوار الداخلية')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','شارع صرح الشهيد')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','شارع المطار')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','طبربور')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','خلدا')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الدوار الاول')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الدوار الثاني')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الدوار الرابع')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الدوار الخامس')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الدوار السابع')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الدوار الثامن')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','البقعة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','عين الباشا')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','جبل الجوفة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','جبل ')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','المنارة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ماركا الجنوبية')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','مخيم الحسين')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','اليادودة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الجيزة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ابو علندة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الهاشمي الشمالي')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ابو نصير')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','دابوق')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','شارع عبدالله غوشة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ضاحية المهندسين')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','دير غبار')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','مكة مول')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','شارع المدينةالمنورة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','شارع الاردن')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','عرجان')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','شارع الامير حسن')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','جبل القصور')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','شفا بدران')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','خريبة السوق')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','راس العين')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','جبل النظيف')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ضاحية الحاج حسن')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','جبل الزهور')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ام الحيران')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ام نوارا')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','مخيم حطين')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain',' الذراع الغربي')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','البنيات')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الجندويل')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الكرسي')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ام العمد')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','دوار الكيلو')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','رغدان')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','شارع السلط')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','شارع الملكه رانيا العبد الله')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','صافوط')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ضاحية الامير حسن')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ضاحية الياسمين')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ياجوز')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','وادي الحدادة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','وادي الرمم')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','اللبن')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','المصدار')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الحمر')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ضاحية الامير علي')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','سقف السيل')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','جرش')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','وادي موسى')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الأردن')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ضاحية الامير راشد')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','القسطل')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','داخل وخارج عمان')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ضواحي عمان')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ام البساتين')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الحسبان')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','زيزيا')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الموقر')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الاقصى')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الصالحين')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الظهير')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ضاحية الرشيد')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','حي الدير')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ابو السوس')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','زهران')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الروابي')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الجيزه')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الحج حسن')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الرونق')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الكمالية')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','جبل طارق')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','حي الصناعة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','شارع الخالدي')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','شارع السعادة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الرصيفة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','شارع شاكر')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الزرقاء')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ياجوز')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','اوتستراد الزرقاء')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الهاشمية')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الزرقاء الجديدة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الضليل')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الازرق')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الحصن')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','اربد')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','اربد')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الشونة الشمالية')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الرمثا')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','العقبة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','المنطقة الصناعية')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الكرك')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','معان')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','وادي موسى')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','البتراء')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الشوبك')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الطفيلة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الطفيلة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','جرش')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','المفرق')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الخالدية')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','المفرق')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','البادية')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الطيبة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','خريبة السوق')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','مأدبا')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','عجلون')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','عجلون')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','البقعة')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الفحيص')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','ماحص')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','السلط')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','صافوط')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','الشونة الجنوبية')
                    cy.get('#ctl00_ContentPlaceHolder1_ddlIssuingPlace').should('contain','البحر الميت')   */
        });
      });
      describe("Verify that the basic information should contain doceument issue date", () => {
        it("Verify that the document issue date should have labele name with تاريخ اصدار الوثيقة ", () => {
          cy.get(":nth-child(12) > .form-group > label").should(
            "contain.text",
            "تاريخ اصدار الوثيقة "
          );
        });
        it("Verify that should appear star beside the document issue date field and should be in red color", () => {
          cy.get(":nth-child(12) > .form-group > label .fa").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it("Verify that the document issue date field should be mandatory and have attr errorlbl", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtIssuingDate").should(
            "not.have.attr",
            "class",
            "errorlbl"
          );
        });
        it("Verify that the document issue date should be mandatory and the color of the field should not be in the red", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtIssuingDate").should(
            "not.have.attr",
            "style",
            "visibility:visible;"
          );
        });
        it("Verify that the document issue date should be mandatory and should be in the red color if the user not fill the field", () => {
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator1").should(
            "have.attr",
            "style",
            "color: red; visibility: visible;"
          );
          cy.reload();
        });
        it("Verify that the document issue date should the contant be Lift to right", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtIssuingDate").should(
            "not.have.attr",
            "dir",
            "ltr"
          );
        });
        it("Verify that the document issue date have placholder dd/mm/yyyy", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtIssuingDate").should(
            "have.attr",
            "placeholder",
            "dd/mm/yyyy"
          );
        });
        it("Verify that when the user click on the document issue date field should appear datepicker", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtIssuingDate").click();
          cy.get("#ui-datepicker-div").should("be.visible");
        });
        it("Verify that should be Prev to can change the month datepicker on the document issue date", () => {
          cy.get(".ui-datepicker-prev")
            .should("be.visible")
            .and("have.attr", "data-handler", "prev");
        });
        it("Verify that should be clickable to can change the month datepicker on the document issue date", () => {
          cy.get(".ui-datepicker-prev")
            .should("be.visible")
            .and("have.attr", "data-event", "click");
        });
        it("Verify that should not have next button in datepicker on the document issue date", () => {
          cy.get(".ui-datepicker-next")
            .should("be.visible")
            .and("not.have.attr", "data-handler", "prev");
        });
        it("Verify that should be Prev to can change the month datepicker on the document issue date", () => {
          cy.get(".ui-datepicker-next")
            .should("be.visible")
            .and("not.have.attr", "data-event", "click");
        });

        it("Verify the the document expiry date should have validate message when enter invalid value and invalid date", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtIssuingDate").type(
            "2874658723465"
          );
          cy.get(":nth-child(12) > .form-group > label").click({ force: true });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator15")
            .should("be.visible")
            .contains("تاريخ غير صالح");
          cy.get("#ctl00_ContentPlaceHolder1_CustomValidator3")
            .should("be.visible")
            .contains("تاريخ الإصدار غير صحيح");
          cy.get("#ctl00_ContentPlaceHolder1_txtExpiryDate").clear();
        });
        it("Verify the the document expiry date should have validate message when enter invalid value", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtIssuingDate").type(
            "01/08/2021"
          );
          cy.get(":nth-child(12) > .form-group > label").click({ force: true });
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator15")
            .should("be.visible")
            .contains("تاريخ غير صالح");
          cy.get("#ctl00_ContentPlaceHolder1_txtExpiryDate").clear();
        });
      });
      describe("Verify that the basic information should contain doceument expiry date", () => {
        it("Verify that the document expiry date should have labele name with تاريخ انتهاء الوثيقة ", () => {
          cy.get(":nth-child(13) > .form-group > label").should(
            "contain.text",
            "تاريخ انتهاء الوثيقة "
          );
        });
        it("Verify that should appear star beside the document expiry date field and should be in red color", () => {
          cy.get(":nth-child(12) > .form-group > label .fa").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it("Verify that the document expiry date field should be mandatory and have attr errorlbl", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtExpiryDate").should(
            "not.have.attr",
            "class",
            "errorlbl"
          );
        });
        it("Verify that the document expiry date should be mandatory and the color of the field should not be in the red", () => {
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator67").should(
            "not.have.attr",
            "style",
            "visibility:visible;"
          );
        });
        it("Verify that the document expiry date should be mandatory and should be in the red color if the user not fill the field", () => {
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator67").should(
            "have.attr",
            "style",
            "color: red; visibility: visible;"
          );
          cy.reload();
        });
        it("Verify that the document expiry date have placholder dd/mm/yyyy", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtExpiryDate").should(
            "have.attr",
            "placeholder",
            "dd/mm/yyyy"
          );
        });
        it("Verify that when the user click on the document expiry date field should appear datepicker", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtExpiryDate").click();
          cy.get("#ui-datepicker-div").should("be.visible");
        });
        it("Verify that should be Prev to can change the month datepicker on document expiry date ", () => {
          cy.get(".ui-datepicker-next")
            .should("be.visible")
            .and("have.attr", "data-handler", "next");
        });
        it("Verify that should be clickable to can change the month datepicker on document expiry date", () => {
          cy.get(".ui-datepicker-next")
            .should("be.visible")
            .and("have.attr", "data-event", "click");
        });
        it("Verify that should not have next button in datepicker on document expiry date", () => {
          cy.get(".ui-datepicker-prev")
            .should("be.visible")
            .and("not.have.attr", "data-handler", "prev");
        });
        it("Verify that should be Prev to can change the month datepicker on document expiry date", () => {
          cy.get(".ui-datepicker-prev")
            .should("be.visible")
            .and("not.have.attr", "data-event", "click");
        });
        it("Verify the the document expiry date should have validate message when enter invalid value and invalid date", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtExpiryDate").type(
            "2874658723465"
          );
          cy.get(":nth-child(12) > .form-group > label").click();
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator11")
            .should("be.visible")
            .contains("تاريخ غير صالح");
          cy.get("#ctl00_ContentPlaceHolder1_CustomValidator2")
            .should("be.visible")
            .contains("تاريخ الإنتهاء اقل من تاريخ اليوم");
          cy.get("#ctl00_ContentPlaceHolder1_txtExpiryDate").clear();
        });
        it("Verify the the document expiry date should have validate message when enter invalid date", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtExpiryDate").type("01/08/2021");
          cy.get(":nth-child(12) > .form-group > label").click();
          cy.get("#ctl00_ContentPlaceHolder1_CustomValidator2")
            .should("be.visible")
            .contains("تاريخ الإنتهاء اقل من تاريخ اليوم");
          cy.get("#ctl00_ContentPlaceHolder1_txtExpiryDate").clear();
        });
      });
      describe("Verify that the basic information should contain Document id", () => {
        it("Verify that the document id filed should appear when the user choses document id from identity type", () => {
          cy.get("#ctl00_ContentPlaceHolder1_ddlJoIdentityType").select("1.0");
          cy.contains("رقم هوية الاحوال المدنية").should("be.visible");
        });
        it("Verify that the document id should be mandatory", () => {
          cy.get("#ctl00_ContentPlaceHolder1_rfvtxtJoDocumentID").should(
            "have.attr",
            "style",
            "color: red; visibility: visible;"
          );
        });
        it("Verify that should appear star beside the document id field and should be in red color", () => {
          cy.get(
            "#divJoDocumentID > .form-group > label > .fa-asterisk"
          ).should("have.css", "color", "rgb(255, 0, 0)");
        });
        it("Verify that the documnet id should have tooltip beside document id", () => {
          cy.get(
            "#divJoDocumentID > .form-group > label > .fa-question-circle"
          ).should("be.visible");
        });
        it("Verify that the document id should have tooltip and when the mouse hover on the tool", () => {
          cy.get(
            "#divJoDocumentID > .form-group > label > .fa-question-circle"
          ).trigger("mouseover");
          cy.get(".img-thumbnail").should("be.visible");
          cy.get(".img-thumbnail").should(
            "have.attr",
            "src",
            "App_Themes/SiteAr/images/1.jpg"
          );
          cy.reload();
          cy.get("#ctl00_ContentPlaceHolder1_ddlJoIdentityType").select("1.0");
        });
        it("Verify that the document id should accept only 8 digit with char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtJoDocumentID").should(
            "have.attr",
            "maxlength",
            "8"
          );
        });
        it("Verify that the document id should accept char and number", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtJoDocumentID").type("123456sd");
          cy.get(
            "#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0"
          ).click();
          cy.get(
            "#ctl00_ContentPlaceHolder1_RegularExpressionValidator17"
          ).should("not.be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtJoDocumentID").clear();
        });
        it("Verify that the documnet id should not accept char and number more than 8 digit ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtJoDocumentID").type(
            "234.mikc-="
          );
          cy.get(
            "#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0"
          ).click();
          cy.get(
            "#ctl00_ContentPlaceHolder1_RegularExpressionValidator17"
          ).should("be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtJoDocumentID").clear();
        });
        it("Verify that the documnet id should have validate message if user fill incorrect data", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtJoDocumentID").type(
            "234.mikc-="
          );
          cy.get(
            "#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0"
          ).click();
          cy.contains("رقم هوية الاحوال المدنية غير صحيح").should("be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtJoDocumentID").clear();
        });
      });
      describe("Verify that the basic information should contain Passport number", () => {
        it("open url", () => {});
        it("Verify that the Passport number filed should appear when the user choses Passport number from identity type", () => {
          cy.get("#ctl00_ContentPlaceHolder1_ddlJoIdentityType").select("2.0");
          cy.contains("رقم جواز السفر").should("be.visible");
        });
        it("Verify that the Passport number should be mandatory", () => {
          cy.get("#ctl00_ContentPlaceHolder1_rfvtxtJoPassportNo").should(
            "have.attr",
            "style",
            "color: red; visibility: visible;"
          );
        });
        it("Verify that should appear star beside the Passport number and should be in red color", () => {
          cy.get(
            "#divJoPassportNo > .form-group > label > .fa-asterisk"
          ).should("have.css", "color", "rgb(255, 0, 0)");
        });
        it("Verify that the documnet id should have tooltip beside Passport number", () => {
          cy.get(
            "#divJoPassportNo > .form-group > label > .fa-asterisk"
          ).should("be.visible");
        });
        it("Verify that the Passport number should have tooltip and when the mouse hover on the tool appear the tooltip", () => {
          cy.get(
            "#divJoPassportNo > .form-group > label > .fa-asterisk"
          ).trigger("mouseover");
          cy.get(
            "div.row div.col-md-12 div.border-1px.p-25 div.row div:nth-child(1) div.col-md-12:nth-child(19) div.form-group label:nth-child(1) > i.fa.fa-question-circle:nth-child(2)"
          ).should("be.visible");
          cy.reload();
          cy.get("#ctl00_ContentPlaceHolder1_ddlJoIdentityType").select("1.0");
        });
        it("Verify that the Passport number should accept only 8 digit with char", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtJoPassportNo").should(
            "have.attr",
            "maxlength",
            "7"
          );
        });
        it("Verify that the Passport number should accept char and number", () => {
          cy.get("#ctl00_ContentPlaceHolder1_ddlJoIdentityType").select("2.0");
          cy.get("#ctl00_ContentPlaceHolder1_txtJoPassportNo").type("124563g");
          cy.get(
            "#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0"
          ).click();
          cy.get(
            "#ctl00_ContentPlaceHolder1_RegularExpressionValidator14"
          ).should("not.be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtJoPassportNo").clear();
        });
        it("Verify that the Passport number should not accept char and number more than 7 digit ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_ddlJoIdentityType").select("2.0");
          cy.get("#ctl00_ContentPlaceHolder1_txtJoPassportNo").type(
            "234.mi34kc-="
          );
          cy.get(
            "#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0"
          ).click();
          cy.get(
            "#ctl00_ContentPlaceHolder1_RegularExpressionValidator14"
          ).should("be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtJoPassportNo").clear();
        });
        it("Verify that the Passport number should have validate message if user fill incorrect data", () => {
          cy.get("#ctl00_ContentPlaceHolder1_ddlJoIdentityType").select("2.0");
          cy.get("#ctl00_ContentPlaceHolder1_txtJoPassportNo").type(
            "234.mikc-="
          );
          cy.get(
            "#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0"
          ).click();
          cy.contains("رقم جواز السفر غير صحيح").should("be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtJoPassportNo").clear();
          cy.reload();
        });
      });
      describe("Verify that the basic information should contain document field", () => {
        it("VErify that the document field should contane the title name (إرفاق صورة الوثيقة)", () => {
          cy.get(":nth-child(19) > .form-group > label")
            .should("be.visible")
            .and("contain", "إرفاق صورة الوثيقة");
        });
        it("Verify that the document field should have a star beside the lable name in red color", () => {
          cy.get(":nth-child(19) > .form-group > label > .fa-asterisk").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it("Verify that should exist toltip beside the label name by defualt", () => {
          cy.get(":nth-child(19) > .form-group > label > .fa-question-circle")
            .should("be.visible")
            .and(
              "have.attr",
              "data-original-title",
              "إمتدادات الملفات المسموح بها = jpg / png / pdf"
            );
        });
        it("VErify that the document field should change to the read color if the user click calcoulate without fill it", () => {
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator61").should(
            "have.attr",
            "style",
            "color: red; visibility: visible;"
          );
          cy.reload();
        });
        it("VErify that the document field should have attr file", () => {
          cy.get(
            "#ctl00_ContentPlaceHolder1_fudPersonalDocumentOrPassport"
          ).should("have.attr", "type", "file");
        });
        it("Verify that the attached field should appear the validate message if the user tried to upload word file", () => {
          const fixtures = "word test.docx";
          cy.get(
            "#ctl00_ContentPlaceHolder1_fudPersonalDocumentOrPassport"
          ).attachFile(fixtures);
          cy.get(
            "#ctl00_ContentPlaceHolder1_RegularExpressionValidator12"
          ).should("be.visible");
          cy.get(
            "#ctl00_ContentPlaceHolder1_fudPersonalDocumentOrPassport"
          ).invoke("val", "");
        });
        it("Verify that the attached field should appear the validate message if the user tried Larg PDF file", () => {
          const fixtures = "largpdf2.pdf";
          cy.get(
            "#ctl00_ContentPlaceHolder1_fudPersonalDocumentOrPassport"
          ).attachFile(fixtures);
          cy.get(":nth-child(1) > :nth-child(3) > .help-inline").should(
            "be.visible"
          );
          cy.get(
            "#ctl00_ContentPlaceHolder1_fudPersonalDocumentOrPassport"
          ).invoke("val", "");
        });
        it("Verify that the attached field should not appear the validate message if the user tried to upload pic png file", () => {
          const fixtures = "test.png";
          cy.get(
            "#ctl00_ContentPlaceHolder1_fudPersonalDocumentOrPassport"
          ).attachFile(fixtures);
          cy.get(":nth-child(1) > :nth-child(3) > .help-inline").should(
            "not.exist"
          );
          cy.get(
            "#ctl00_ContentPlaceHolder1_fudPersonalDocumentOrPassport"
          ).invoke("val", "");
        });
        it("Verify that the attached field should appear the validate message if the user tried to upload large pic(> 4 mb) file", () => {
          const fixtures = "largepic.jpg";
          cy.get(
            "#ctl00_ContentPlaceHolder1_fudPersonalDocumentOrPassport"
          ).attachFile(fixtures);
          cy.get(":nth-child(1) > :nth-child(3) > .help-inline").should(
            "be.visible"
          );
          cy.get(
            "#ctl00_ContentPlaceHolder1_fudPersonalDocumentOrPassport"
          ).invoke("val", "");
        });
        it("Verify that the attached field should not appear the validate message if the user tried to upload large pic 3.4 mb file", () => {
          const fixtures = "test3.4.jpg";
          cy.get(
            "#ctl00_ContentPlaceHolder1_fudPersonalDocumentOrPassport"
          ).attachFile(fixtures);
          cy.get(":nth-child(1) > :nth-child(3) > .help-inline").should(
            "not.exist"
          );
          cy.get(
            "#ctl00_ContentPlaceHolder1_fudPersonalDocumentOrPassport"
          ).invoke("val", "");
        });
        it("Verify that the attached field should not appear the validate message if the user tried to upload pdf file", () => {
          const fixtures = "pdftest.pdf";
          cy.get(
            "#ctl00_ContentPlaceHolder1_fudPersonalDocumentOrPassport"
          ).attachFile(fixtures);
          cy.get(":nth-child(1) > :nth-child(3) > .help-inline").should(
            "not.exist"
          );
          cy.get(
            "#ctl00_ContentPlaceHolder1_fudPersonalDocumentOrPassport"
          ).invoke("val", "");
        });
        it("Verify that the attached field should not appear the validate message if the user tried to upload pdf file less than 4Mg", () => {
          const fixtures = "pdf.pdf";
          cy.get(
            "#ctl00_ContentPlaceHolder1_fudPersonalDocumentOrPassport"
          ).attachFile(fixtures);
          cy.get(":nth-child(1) > :nth-child(3) > .help-inline").should(
            "not.exist"
          );
          cy.get(
            "#ctl00_ContentPlaceHolder1_fudPersonalDocumentOrPassport"
          ).invoke("val", "");
        });
      });
      describe("Verify that the basic information should contain the Gender&Prefix fields", () => {
        it("Verify that the gender field have label name الجنس", () => {
          cy.get(
            "#ctl00_ContentPlaceHolder1_UpdatePanelGender > :nth-child(1) > .form-group > :nth-child(1)"
          ).should("contain", "الجنس ");
        });
        it("Verify that the gender field should have star with red color beside the label name", () => {
          cy.get(
            "#ctl00_ContentPlaceHolder1_UpdatePanelGender > :nth-child(1) > .form-group > :nth-child(1) > .fa-asterisk"
          ).should("be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator39").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it("Verify that the gender field should contain (Female) ", () => {
          cy.get(
            "#ctl00_ContentPlaceHolder1_UpdatePanelGender > :nth-child(1) > .form-group"
          ).should("contain", "انثى");
          cy.get("#ctl00_ContentPlaceHolder1_rdoGender_0").should(
            "have.attr",
            "type",
            "radio"
          );
        });
        it("Verify that the gender field should contain (Mail)", () => {
          cy.get(
            "#ctl00_ContentPlaceHolder1_rdoGender > tbody > tr > :nth-child(2) > label"
          ).contains("ذكر");
          cy.get("#ctl00_ContentPlaceHolder1_rdoGender_1").should(
            "have.attr",
            "type",
            "radio"
          );
          cy.get("#ctl00_ContentPlaceHolder1_rdoGender_1").should(
            "have.attr",
            "checked",
            "checked"
          );
        });
        it("Verify that the user cant continue without select the gender", () => {
          cy.get("#ctl00_ContentPlaceHolder1_rdoGender_1").invoke(
            "removeAttr",
            "checked"
          );
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator39")
            .should("be.visible")
            .contains("حقل مطلوب");
        });
        it("VErify that if the customer select Mail should the Prefix drop-down has 1 option(Mr) ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_rdoGender_1").click({
            force: true,
          });
          cy.get(
            "#ctl00_ContentPlaceHolder1_UpdatePanelGender > :nth-child(1) > .form-group"
          ).then(($btn) => {
            cy.get("#ctl00_ContentPlaceHolder1_ddlPrefix")
              .find("option")
              .then((options) => {
                const actual = [...options].map((o) => o.value);
                expect(actual).to.deep.eq(["1"]);
              });
          });
        });
        it("VErify that if the customer select Mail should the Prefix drop-down has 1 option(Miss,Mrs) ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_rdoGender_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_rdoGender_0").click({
            force: true,
          });
          cy.wait(1000);
          cy.get(
            "#ctl00_ContentPlaceHolder1_UpdatePanelGender > :nth-child(1) > .form-group"
          ).then(($btn) => {
            cy.get("#ctl00_ContentPlaceHolder1_ddlPrefix")
              .find("option")
              .then((options) => {
                const actual = [...options].map((o) => o.value);
                expect(actual).to.deep.eq(["2", "4"]);
              });
          });
        });
        it("Verify that the Prefix field have label name الاختصار", () => {
          cy.get(
            "#ctl00_ContentPlaceHolder1_UpdatePanelGender > :nth-child(2) > .form-group > label"
          ).should("contain", "اختصار ");
        });
        it("Verify that the Prefix field should have star with red color beside the label name", () => {
          cy.get("#ctl00_ContentPlaceHolder1_rfvddlPrefix").should(
            "have.attr",
            "style",
            "color:Red;visibility:hidden;"
          );
        });
      });
      describe("Verify that the basic information should contane Marital status field", () => {
        it("Verify that the Marital status field have label name الحالة االجتماعية", () => {
          cy.get(":nth-child(21) > .form-group > label").should(
            "contain",
            "الحالة االجتماعية "
          );
        });
        it("Verify that the Marital status field should have star with red color beside the label name", () => {
          cy.get(":nth-child(21) > .form-group > label > .fa").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it("Verify that the Marital status should be requerad and if the customer click calculate without select option should the field be in the red color", () => {
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator70")
            .should("have.attr", "class", "errorlbl")
            .should("have.attr", "style", "color: red; visibility: visible;");
          cy.reload();
        });
        it("VErify that the Marital status drop-down contain 4 options(اختر من القائمة,متزوج,أعزب, أرملة, مطلقة) ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator70").then(
            ($btn) => {
              cy.get("#ctl00_ContentPlaceHolder1_ddlMaritalStatus")
                .find("option")
                .then((options) => {
                  const actual = [...options].map((o) => o.value);
                  expect(actual).to.deep.eq(["0", "1", "2", "3", "4"]);
                });
            }
          );
        });
        it("Verify that the first option of Marital status should be (اختر من القائمة) with value: 0", () => {
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator70").then(
            ($btn) => {
              cy.get("#ctl00_ContentPlaceHolder1_ddlMaritalStatus")
                .find("option")
                .then((options) => {
                  const actual = [...options].map((o) => o.value);
                  expect(actual).to.deep.eq(["0", "1", "2", "3", "4"]);

                  cy.get("#ctl00_ContentPlaceHolder1_ddlMaritalStatus")
                    .should("have.value", "0")
                    .contains("اختر من القائمة");
                  cy.get("#ctl00_ContentPlaceHolder1_ddlMaritalStatus")
                    .select("1")
                    .contains("متزوج");
                  cy.get("#ctl00_ContentPlaceHolder1_ddlMaritalStatus")
                    .select("2")
                    .contains("أعزب");
                  cy.get("#ctl00_ContentPlaceHolder1_ddlMaritalStatus")
                    .select("3")
                    .contains("أرملة");
                  cy.get("#ctl00_ContentPlaceHolder1_ddlMaritalStatus")
                    .select("4")
                    .contains("مطلقة");
                });
            }
          );
        });
      });
      describe("Verify that the basic information should contane Place of birth field", () => {
        it("Verify that the Place of birth  field have label name مكان الولادة", () => {
          cy.get(":nth-child(22) > .form-group > label").should(
            "contain",
            "مكان الولادة "
          );
        });
        it("Verify that the Place of birth  field should have star with red color beside the label name", () => {
          cy.get(":nth-child(22) > .form-group > label > .fa-asterisk").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it("Verify that the Place of birth  should be requerad and if the customer click calculate without select option should the field be in the red color", () => {
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get(
            "#select2-ctl00_ContentPlaceHolder1_ddlPlaceOfBirth-container"
          ).should("have.css", "color", "rgb(68, 68, 68)");
          cy.reload();
        });
        it("VErify that the Place of birth  drop-down contain value (all countries) ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator71").then(
            ($btn) => {
              cy.get("#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth")
                .find("option")
                .then((options) => {
                  const actual = [...options].map((o) => o.value);
                  expect(actual).to.deep.eq([
                    "0",
                    "JO",
                    "AX",
                    "AA",
                    "AQ",
                    "BQ",
                    "BV",
                    "IO",
                    "CV",
                    "CX",
                    "CC",
                    "CI",
                    "CW",
                    "TL",
                    "TF",
                    "GG",
                    "HM",
                    "JE",
                    "KZ",
                    "XK",
                    "IM",
                    "MH",
                    "YT",
                    "ME",
                    "MM",
                    "NF",
                    "BL",
                    "MF",
                    "RS",
                    "SX",
                    "GS",
                    "SJ",
                    "UM",
                    "EH",
                    "AR",
                    "AM",
                    "AU",
                    "AF",
                    "DE",
                    "AG",
                    "ID",
                    "IS",
                    "ER",
                    "IR",
                    "ET",
                    "AW",
                    "ES",
                    "EE",
                    "IL",
                    "SZ",
                    "EC",
                    "AE",
                    "AL",
                    "BS",
                    "BM",
                    "DZ",
                    "SV",
                    "SO",
                    "IQ",
                    "CD",
                    "CG",
                    "MA",
                    "SA",
                    "GB",
                    "NE",
                    "US",
                    "YE",
                    "AD",
                    "AO",
                    "AI",
                    "UY",
                    "UZ",
                    "UG",
                    "UA",
                    "IE",
                    "IT",
                    "PG",
                    "PY",
                    "PK",
                    "PW",
                    "BH",
                    "BR",
                    "BB",
                    "PT",
                    "BN",
                    "BE",
                    "BG",
                    "BD",
                    "PA",
                    "BT",
                    "BW",
                    "PR",
                    "BF",
                    "BU",
                    "BI",
                    "BA",
                    "PL",
                    "BO",
                    "PF",
                    "PE",
                    "BY",
                    "BZ",
                    "BJ",
                    "TZ",
                    "TH",
                    "TW",
                    "TM",
                    "TR",
                    "TT",
                    "TD",
                    "CL",
                    "TV",
                    "TK",
                    "TN",
                    "TO",
                    "TP",
                    "JM",
                    "GI",
                    "AN",
                    "KM",
                    "TC",
                    "SB",
                    "FO",
                    "FK",
                    "VI",
                    "VG",
                    "KY",
                    "CK",
                    "MP",
                    "AS",
                    "AP",
                    "NU",
                    "CF",
                    "GA",
                    "DO",
                    "TG",
                    "CZ",
                    "ZA",
                    "GE",
                    "DJ",
                    "DK",
                    "DM",
                    "RW",
                    "RU",
                    "RO",
                    "RE",
                    "ZM",
                    "ZW",
                    "ZN",
                    "AZ",
                    "WS",
                    "ST",
                    "SM",
                    "SK",
                    "SI",
                    "SG",
                    "SD",
                    "SY",
                    "SR",
                    "SE",
                    "SW",
                    "CH",
                    "SL",
                    "LK",
                    "SC",
                    "SN",
                    "CN",
                    "TJ",
                    "ZZ",
                    "OM",
                    "GM",
                    "GH",
                    "GL",
                    "GD",
                    "GT",
                    "GP",
                    "GU",
                    "GY",
                    "GF",
                    "GN",
                    "GQ",
                    "GW",
                    "VU",
                    "FR",
                    "PH",
                    "PS",
                    "PN",
                    "VE",
                    "FI",
                    "VN",
                    "FJ",
                    "CY",
                    "QA",
                    "KG",
                    "KA",
                    "NC",
                    "CM",
                    "HR",
                    "KI",
                    "LI",
                    "LS",
                    "LA",
                    "KH",
                    "CA",
                    "CU",
                    "KR",
                    "KP",
                    "CR",
                    "CO",
                    "KW",
                    "KE",
                    "LV",
                    "LB",
                    "LU",
                    "LY",
                    "LR",
                    "LT",
                    "MQ",
                    "MO",
                    "MV",
                    "MT",
                    "ML",
                    "MY",
                    "MG",
                    "VA",
                    "EG",
                    "MK",
                    "MX",
                    "MW",
                    "MD",
                    "MN",
                    "MR",
                    "MU",
                    "MZ",
                    "MC",
                    "MS",
                    "FM",
                    "NA",
                    "NR",
                    "NO",
                    "AT",
                    "NP",
                    "NG",
                    "NI",
                    "NZ",
                    "HW",
                    "HT",
                    "HU",
                    "IN",
                    "HN",
                    "NL",
                    "HK",
                    "WF",
                    "JP",
                    "YU",
                    "GR",
                  ]);
                });
            }
          );
        });
        /*it('VErify that the Place of birth  drop-down contain all countries ', () => {
					cy.get('#ctl00_ContentPlaceHolder1_RequiredFieldValidator71').then(($btn) => {
						cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').find('option').then(options => {
							const actual = [...options].map(o => o.value)
							expect(actual).to.deep.eq([
								"0","JO","AX","AA","AQ","BQ","BV","IO","CV","CX","CC","CI","CW","TL","TF","GG","HM","JE","KZ","XK","IM","MH","YT","ME","MM","NF","BL","MF","RS","SX","GS","SJ","UM","EH","AR","AM","AU","AF","DE","AG","ID","IS","ER","IR","ET","AW","ES","EE","IL","SZ","EC","AE","AL","BS","BM","DZ",
								"SV","SO","IQ","CD","CG","MA","SA","GB","NE","US","YE","AD","AO","AI","UY","UZ","UG","UA","IE","IT","PG","PY","PK","PW","BH","BR","BB","PT","BN","BE","BG","BD","PA","BT","BW","PR","BF","BU","BI","BA","PL","BO","PF","PE","BY","BZ","BJ","TZ","TH","TW","TM","TR","TT","TD","CL","TV",
								"TK","TN","TO","TP","JM","GI","AN","KM","TC","SB","FO","FK","VI","VG","KY","CK","MP","AS","AP","NU","CF","GA","DO","TG","CZ","ZA","GE","DJ","DK","DM","RW","RU","RO","RE","ZM","ZW","ZN","AZ","WS","ST","SM","SK","SI","SG","SD","SY","SR","SE","SW","CH","SL","LK","SC","SN","CN","TJ",
								"ZZ","OM","GM","GH","GL","GD","GT","GP","GU","GY","GF","GN","GQ","GW","VU","FR","PH","PS","PN","VE","FI","VN","FJ","CY","QA","KG","KA","NC","CM","HR","KI","LI","LS","LA","KH","CA","CU","KR","KP","CR","CO","KW","KE","LV","LB","LU","LY","LR","LT","MQ","MO","MV","MT","ML","MY","MG",
								"VA","EG","MK","MX","MW","MD","MN","MR","MU","MZ","MC","MS","FM","NA","NR","NO","AT","NP","NG","NI","NZ","HW","HT","HU","IN","HN","NL","HK","WF","JP","YU","GR"
							])													
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').should('have.value','0').contains('اختر من القائمة')
							cy.get(':nth-child(10) div.row div.col-md-12 div.border-1px.p-25 div.row div:nth-child(1) div.col-sm-4:nth-child(22)').select('JO').contains('الأردن')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AX').contains('Aland Islands')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AA').contains('American Samoa')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AQ').contains('Antarctica')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BQ').contains('Bonaire, Sint Eustatius and Saba')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BV').contains('Bouvet Island')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('IO').contains('British Indian Ocean Territory')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CV').contains('Cape Verde')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CX').contains('Christmas Island')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CC').contains('Cocos (Keeling) Islands')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CI').contains('Cote Ivoire (Ivory Coast)')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CW').contains('Curaçao')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TL').contains('East Timor')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TF').contains('French Southern Territories')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GG').contains('Guernsey and Alderney')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('HM').contains('Heard Island and McDonald Islands')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('JE').contains('Jersey')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('KZ').contains('Kazakhstan')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('XK').contains('Kosovo')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('IM').contains('Man (Isle of)')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MH').contains('Marshall Islands')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('YT').contains('Mayotte')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('ME').contains('Montenegro')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MM').contains('Myanmar')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('NF').contains('Norfolk Island')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BL').contains('Saint-Barthelemy')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MF').contains('Saint-Martin (French part)')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('RS').contains('Serbia')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SX').contains('Sint Maarten (Dutch part)')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GS').contains('South Georgia')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SJ').contains('Svalbard And Jan Mayen Islands')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('UM').contains('United States Minor Outlying Islands')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('EH').contains('Western Sahara')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AR').contains('أرجنتين')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AM').contains('أرمينيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AU').contains('أستراليا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AF').contains('أفغانستان')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('DE').contains('ألمانيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AG').contains('أنتيغوا / باربودا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('ID').contains('أندونيسيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('IS').contains('أيسلندا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('ER').contains('إريتريا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('IR').contains('ابران')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('ET').contains('اثيوبيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AW').contains('اروبا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('ES').contains('اسبانيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('EE').contains('استونا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('IL').contains('اسرائيل')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SZ').contains('اسواتيني')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('EC').contains('اكوادور')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AE').contains('الامارات العربية المتحدة')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AL').contains('البانيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BS').contains('الباهاما')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BM').contains('البرمودا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('DZ').contains('الجزائر')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SV').contains('السلفادور')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SO').contains('الصومال')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('IQ').contains('العراق')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CD').contains('الكونغو (برازافيل)')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CG').contains('الكونغو (كينشاسا)')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MA').contains('المغرب')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SA').contains('المملكة العربية السعودية')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GB').contains('المملكة المتحدة')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('NE').contains('النيجر')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('US').contains('الولايات المتحدة')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('YE').contains('اليمن')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AD').contains('اندورا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AO').contains('انغولا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AI').contains('انغيلا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('UY').contains('اوروغواي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('UZ').contains('اوزبكستان')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('UG').contains('اوغندا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('UA').contains('اوكرانيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('IE').contains('ايرلندا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('IT').contains('ايطاليا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('PG').contains('بابوا غينيا الجديدة')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('PY').contains('باراجواي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('PK').contains('باكستان')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('PW').contains('بالاو')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BH').contains('بحرين')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BR').contains('برازيل')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BB').contains('بربادوس')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('PT').contains('برتغال')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BN').contains('بروناي دار السلام')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BE').contains('بلجيكيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BG').contains('بلغاريا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BD').contains('بنغلادش')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('PA').contains('بنما')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BT').contains('بوتان')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BW').contains('بوتسوانا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('PR').contains('بورتوريكو')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BF').contains('بوركينا فاسو')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BU').contains('بورما')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BI').contains('بوروندي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BA').contains('بوسنة')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('PL').contains('بولندا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BO').contains('بوليفيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('PF').contains('بولينيزيا الفرنسية')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('PE').contains('بيرو')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BY').contains('بيلاروس')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BZ').contains('بيليز')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('BJ').contains('بينين')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TZ').contains('تانزانيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TH').contains('تايلاند')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TW').contains('تايوان')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TM').contains('تركمانستان')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TR').contains('تركيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TT').contains('ترينداد وتوباغو')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TD').contains('تشاد')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CL').contains('تشيلي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TV').contains('توفالو')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TK').contains('توكيلاو')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TN').contains('تونس')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TO').contains('تونغا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TP').contains('تيمور الشرقية')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('JM').contains('جامايكا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GI').contains('جبل طارق البريطانية')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AN').contains('جزر الانتيل الهولندية')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('KM').contains('جزر القمر ومايوت')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TC').contains('جزر تركس وكايكوس')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SB').contains('جزر سليمان')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('FO').contains('جزر فاروس')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('FK').contains('جزر فوكلاند')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('VI').contains('جزر فيرجن الامريكية')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('VG').contains('جزر فيرجن البريطانية')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('KY').contains('جزر كايمان')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CK').contains('جزر كوك')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MP').contains('جزر مريانا الشمالية')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AS').contains('جزيرة اسينشن')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AP').contains('جزيرة الانتيل')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('NU').contains('جزيرة نيوي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CF').contains('جمهورية افريقيا الوسطى')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GA').contains('جمهورية الجابون')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('DO').contains('جمهورية الدومنيكان')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TG').contains('جمهورية توغو')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CZ').contains('جمهوريّة التّشيك')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('ZA').contains('جنوب افريقيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GE').contains('جورجيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('DJ').contains('جيبوتي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('DK').contains('دنمارك')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('DM').contains('دومينيك')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('RW').contains('راواندا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('RU').contains('روسيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('RO').contains('رومانيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('RE').contains('ريونيون')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('ZM').contains('زامبيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('ZW').contains('زمبابوي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('ZN').contains('زنجبار')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AZ').contains('زينجيبار')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('WS').contains('ساموا الغربية')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('ST').contains('سان تون وبرينسيبي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SM').contains('سان مارينو')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SK').contains('سلوفاكيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SI').contains('سلوفانيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SG').contains('سنغافورة')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SD').contains('سودان')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SY').contains('سوريا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SR').contains('سورينامي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SE').contains('سويد')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SW').contains('سويسرا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CH').contains('سويسرا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SL').contains('سيرا ليون')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('LK').contains('سيريلانكا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SC').contains('سيشل')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('SN').contains('سينيغال')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CN').contains('صين')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('TJ').contains('طاجكستان')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('ZZ').contains('عرب 48')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('OM').contains('عمان')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GM').contains('غامبيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GH').contains('غانا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GL').contains('غرين لاند')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GD').contains('غرينادا / كارياكو')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GT').contains('غواتيلاما')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GP').contains('غوادلوب')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GU').contains('غوام')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GY').contains('غيانا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GF').contains('غيانا الفرنسية')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GN').contains('غينيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GQ').contains('غينيا الاستوائية')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GW').contains('غينيا بيساو')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('VU').contains('فانواتو')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('FR').contains('فرنسا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('PH').contains('فلبين')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('PS').contains('فلسطين')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('PN').contains('فلسطين')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('VE').contains('فنزويلا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('FI').contains('فنلندا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('VN').contains('فيتنام')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('FJ').contains('فيجييي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CY').contains('قبرص')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('QA').contains('قطر')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('KG').contains('قيرغيزستان')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('KA').contains('كازاخستاني')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('NC').contains('كاليدونيا الجديدة')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CM').contains('كاميرون')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('HR').contains('كرواتيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('KI').contains('كريباتي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('LI').contains('كريباتي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('LS').contains('كريباتي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('LA').contains('كريباتي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('KH').contains('كمبوديا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CA').contains('كندا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CU').contains('كوبا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('KR').contains('كوريا الجنوبية')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('KP').contains('كوريا الشمالية')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CR').contains('كوستا ريكا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('CO').contains('كولومبيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('KW').contains('كويت')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('KE').contains('كينيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('LV').contains('لاتيفيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('LB').contains('لبنان')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('LU').contains('لوكسمبورغ')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('LY').contains('ليبيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('LR').contains('ليبيريا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('LT').contains('ليتوانيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MQ').contains('مارتينيك')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MO').contains('ماكاو')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MV').contains('مالديف')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MT').contains('مالطا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('ML').contains('مالي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MY').contains('ماليزيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MG').contains('مدغشقر')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('VA').contains('مدينة الفاتيكان')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('EG').contains('مصر')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MK').contains('مقدوني')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MX').contains('مكسيك')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MW').contains('ملاوي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MD').contains('ملدافيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MN').contains('منغوليا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MR').contains('موريتانيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MU').contains('موريشيوس')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MZ').contains('موزمبيق')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MC').contains('موناكو')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('MS').contains('مونتسيرات')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('FM').contains('ميكرونيزيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('NA').contains('نامبيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('NR').contains('ناورو')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('NO').contains('نرويج')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('AT').contains('نمسا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('NP').contains('نيبال')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('NG').contains('نيجيريا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('NI').contains('نيكاراجوا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('NZ').contains('نيوزيلندا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('HW').contains('هاواي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('HT').contains('هايتي')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('HU').contains('هنجاريا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('IN').contains('هند')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('HN').contains('هندوراس')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('NL').contains('هولندا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('HK').contains('هونج كونج')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('WF').contains('واليس وفوتونا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('JP').contains('يابان')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('YU').contains('يوغوسلافيا')
							cy.get('#ctl00_ContentPlaceHolder1_ddlPlaceOfBirth').select('GR').contains('يونان')


						})
					})
				})*/
      });
      describe("Verify that the basic information should contain Date Of Birth field", () => {
        it("Verify that the Date Of Birth date should have label name with  تاريخ الميلاد", () => {
          cy.get(":nth-child(23) > .form-group > label").should(
            "contain",
            "تاريخ الميلاد"
          );
        });
        it("Verify that should appear star beside the Date Of Birth date field and should be in red color", () => {
          cy.get(":nth-child(23) > .form-group > label > .fa-asterisk").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it("Verify that the Date Of Birth date field should be mandatory and have attr style with red color", () => {
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator72").should(
            "have.attr",
            "style",
            "color: red; visibility: visible;"
          );
          cy.reload();
        });
        it("Verify that the Date Of Birth date have placeholder dd/mm/yyyy", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtDateOfBirth").should(
            "have.attr",
            "placeholder",
            "dd/mm/yyyy"
          );
        });
        it("Verify that when the user click on the Date Of Birth date field should appear datepicker", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtDateOfBirth").click();
          cy.get("#ui-datepicker-div").should("be.visible");
          cy.get(":nth-child(23) > .form-group > label").click();
        });
        it("Verify the Date Of Birth date should have validate message when enter invalid value and invalid date", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtDateOfBirth").type(
            "2874658723465"
          );
          cy.get(":nth-child(23) > .form-group > label").click();
          cy.get(":nth-child(23) > .form-group > :nth-child(4)")
            .should("be.visible")
            .contains("تاريخ غير صالح");
          cy.get("#ctl00_ContentPlaceHolder1_CustomValidator1")
            .should("be.visible")
            .contains("تاريخ الميلاد غير صالح");
          cy.get("#ctl00_ContentPlaceHolder1_txtDateOfBirth").clear();
        });
        it("Verify the Date Of Birth date should have validate message when enter invalid value and invalid date", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtDateOfBirth").type(
            "as/45/qawed"
          );
          cy.get(":nth-child(23) > .form-group > label").click();
          cy.get(":nth-child(23) > .form-group > :nth-child(4)")
            .should("be.visible")
            .contains("تاريخ غير صالح");
          cy.get("#ctl00_ContentPlaceHolder1_CustomValidator1")
            .should("be.visible")
            .contains("تاريخ الميلاد غير صالح");
          cy.get("#ctl00_ContentPlaceHolder1_txtDateOfBirth").clear();
        });
        it("Verify the Date Of Birth date should have validate message when enter invalid value and invalid date", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtDateOfBirth").type(
            "00/00/0000"
          );
          cy.get(":nth-child(23) > .form-group > label").click();
          cy.get(":nth-child(23) > .form-group > :nth-child(4)")
            .should("be.visible")
            .contains("تاريخ غير صالح");
          cy.get("#ctl00_ContentPlaceHolder1_CustomValidator1")
            .should("be.visible")
            .contains("تاريخ الميلاد غير صالح");
          cy.get("#ctl00_ContentPlaceHolder1_txtDateOfBirth").clear();
        });
        it("Verify the Date Of Birth date should have validate message when enter invalid value and invalid date", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtDateOfBirth").type(
            "15/14/2021"
          );
          cy.get(":nth-child(23) > .form-group > label").click();
          cy.get(":nth-child(23) > .form-group > :nth-child(4)")
            .should("be.visible")
            .contains("تاريخ غير صالح");
          cy.get("#ctl00_ContentPlaceHolder1_CustomValidator1")
            .should("be.visible")
            .contains("تاريخ الميلاد غير صالح");
          cy.get("#ctl00_ContentPlaceHolder1_txtDateOfBirth").clear();
        });
        it("Verify the Date Of Birth date should have validate message when enter invalid value", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtDateOfBirth").type(
            "01/09/2029"
          );
          cy.get(":nth-child(23) > .form-group > label").click();
          cy.get("#ctl00_ContentPlaceHolder1_CustomValidator1")
            .should("be.visible")
            .contains("تاريخ الميلاد غير صالح");
          cy.get("#ctl00_ContentPlaceHolder1_txtDateOfBirth").clear();
        });
        it("Verify that the Date Of Birth date should not accept date less than 18 years", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtDateOfBirth").type(
            "01/09/2022"
          );
          cy.get(":nth-child(23) > .form-group > label").click();
          cy.get("#ctl00_ContentPlaceHolder1_CustomValidator1")
            .should("be.visible")
            .contains("تاريخ الميلاد غير صالح");
          cy.get("#ctl00_ContentPlaceHolder1_txtDateOfBirth").clear();
        });
        it("Verify that the Date Of Birth date should accept Valid date", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtDateOfBirth").type(
            "12/05/1999"
          );
          cy.get(
            "#ctl00_ContentPlaceHolder1_rdoGender > tbody > tr > :nth-child(2)"
          ).click();
          cy.get(":nth-child(14) > .help-inline").should("not.exist");
          cy.get("#ctl00_ContentPlaceHolder1_txtDateOfBirth").clear();
          cy.get(
            "#ctl00_ContentPlaceHolder1_rdoGender > tbody > tr > :nth-child(2)"
          ).click();
        });
      });
      describe("Verify that the basic information should contane Educational level field", () => {
        it("Verify that the Educational level field have label name المستوى التعليمي", () => {
          cy.get(":nth-child(24) > .form-group > label").should(
            "contain",
            "المستوى التعليمي "
          );
        });
        it("Verify that the Educational level field should have star with red color beside the label name", () => {
          cy.get(":nth-child(24) > .form-group > label > .fa").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it("Verify that the Educational level should be requerad and if the customer click calculate without select option should the field be in the red color", () => {
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator73")
            .should("have.attr", "class", "errorlbl")
            .and("have.attr", "style", "color: red; visibility: visible;");
          cy.reload();
        });
        it("VErify that the Educational level drop-down contain 4 options(اختر من القائمة,اقل من الثانوية,ثانوية , بكلوريوس, ماجستير، دكتور) ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator73").then(
            ($btn) => {
              cy.get("#ctl00_ContentPlaceHolder1_ddlEducationalLevel")
                .find("option")
                .then((options) => {
                  const actual = [...options].map((o) => o.value);
                  expect(actual).to.deep.eq(["0", "1", "2", "3", "4", "5"]);
                });
            }
          );
        });
        it("Verify that the first option of Educational level should be (اختر من القائمة) with value: 0", () => {
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator73").then(
            ($btn) => {
              cy.get("#ctl00_ContentPlaceHolder1_ddlEducationalLevel")
                .find("option")
                .then((options) => {
                  const actual = [...options].map((o) => o.value);
                  expect(actual).to.deep.eq(["0", "1", "2", "3", "4", "5"]);

                  cy.get("#ctl00_ContentPlaceHolder1_ddlEducationalLevel")
                    .should("have.value", "0")
                    .contains("اختر من القائمة");
                  cy.get("#ctl00_ContentPlaceHolder1_ddlEducationalLevel")
                    .select("1")
                    .contains("Less Than High School"); //('أقل من شهادة ثانوية')
                  cy.get("#ctl00_ContentPlaceHolder1_ddlEducationalLevel")
                    .select("2")
                    .contains("High School"); //('شهادة ثانوية')
                  cy.get("#ctl00_ContentPlaceHolder1_ddlEducationalLevel")
                    .select("3")
                    .contains("BA or Equivalent"); //('بكالوريوس')
                  cy.get("#ctl00_ContentPlaceHolder1_ddlEducationalLevel")
                    .select("4")
                    .contains("Masters"); //('ماجستير')
                  cy.get("#ctl00_ContentPlaceHolder1_ddlEducationalLevel")
                    .select("5")
                    .contains("PHD"); //('دكتوراه')
                });
            }
          );
        });
      });
      //Address details
      describe("VErify that the address details should contain Country field", () => {
        it("Verify that the country field have label name الدولة ", () => {
          cy.get(":nth-child(26) > .form-group > label").should(
            "contain",
            "الدولة "
          );
        });
        it("Verify that the v field should have star with red color beside the label name", () => {
          cy.get(":nth-child(26) > .form-group > label > .fa").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it("Verify that the country field should be disable", () => {
          cy.get("#ctl00_ContentPlaceHolder1_ddlCountry").should(
            "have.attr",
            "disabled"
          );
        });
        it("Verify that the Country field should select the الاردن by defualt", () => {
          cy.get(
            "#select2-ctl00_ContentPlaceHolder1_ddlCountry-container"
          ).should("contain", "الأردن");
        });
      });
      describe("VErify that the address details should contain City field", () => {
        it("Verify that the City  field have label name المدينة ", () => {
          cy.get("#divddlCity > .form-group > label").should(
            "contain",
            "المدينة "
          );
        });
        it("Verify that the City  field should have star with red color beside the label name", () => {
          cy.get("#divddlCity > .form-group > label > .fa").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it("Verify that the City  should be requerad and if the customer click calculate without select option should the field be in the red color", () => {
          cy.get("#ctl00_ContentPlaceHolder1_ddlCity").select("0");
          cy.get("#ctl00_ContentPlaceHolder1_rfvddlCity")
            .should("have.attr", "class", "errorlbl")
            .and("have.attr", "style", "color: red; visibility: visible;");
          cy.reload();
        });
        /*it('VErify that the City  drop-down contain 12 options(جميع المناطق) ', () => {
					cy.get('#ctl00_ContentPlaceHolder1_UpdatePanelArea').then(($btn) => {
						cy.get('#ctl00_ContentPlaceHolder1_ddlCity').find('option').then(options => {
							const actual = [...options].map(o => o.value)
							expect(actual).to.deep.eq(['0','335','341','1','5','4','21','15','16','236','24','16','3'])
						
						})
					})
				})
				it('Verify that the first option of City  should be (اختر من القائمة) with value: 0',()=>{
					cy.get('#ctl00_ContentPlaceHolder1_UpdatePanelArea').then(($btn) => {
						cy.get('#ctl00_ContentPlaceHolder1_ddlCity').find('option').then(options => {
							const actual = [...options].map(o => o.value)
							expect(actual).to.deep.eq(['0','341','335','1','5','4','21','15','16','236','24','16','3'])
							cy.get('#ctl00_ContentPlaceHolder1_rfvddlCity').should('have.value','1').contains('عمان')
							cy.get('#ctl00_ContentPlaceHolder1_rfvddlCity').select('341').contains('البلقاء')
							cy.get('#ctl00_ContentPlaceHolder1_rfvddlCity').select('335').contains('عجلون')
							cy.get('#ctl00_ContentPlaceHolder1_rfvddlCity').select('0').contains('اختر من القائمة')
							cy.get('#ctl00_ContentPlaceHolder1_rfvddlCity').select('5').contains('العقبة')
							cy.get('#ctl00_ContentPlaceHolder1_rfvddlCity').select('4').contains('إربد')
							cy.get('#ctl00_ContentPlaceHolder1_rfvddlCity').select('21').contains('جرش')
							cy.get('#ctl00_ContentPlaceHolder1_rfvddlCity').select('15').contains('الكرك')
							cy.get('#ctl00_ContentPlaceHolder1_rfvddlCity').select('16').contains('معان')
							cy.get('#ctl00_ContentPlaceHolder1_rfvddlCity').select('236').contains('مادبا')
							cy.get('#ctl00_ContentPlaceHolder1_rfvddlCity').select('24').contains('المفرق')
							cy.get('#ctl00_ContentPlaceHolder1_rfvddlCity').select('17').contains('الطفيلة')
							cy.get('#ctl00_ContentPlaceHolder1_rfvddlCity').select('3').contains('الزرقاء')
						})
					})
				})*/
      });
      describe("VErify that the address details should contain Area field", () => {
        it("Verify that the aria field have label name الحي  ", () => {
          cy.get("#divddlArea > .form-group > label").should(
            "contain",
            "الحي "
          );
        });
        it("Verify that the Aria field should have star with red color beside the label name", () => {
          cy.get("#divddlArea > .form-group > label> .fa").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it("Verify that the Aria should be requerad and if the customer click calculate without select option should the field be in the red color", () => {
          cy.get("#ctl00_ContentPlaceHolder1_ddlArea").select("0");
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get("#ctl00_ContentPlaceHolder1_rfvddlArea")
            .should("have.attr", "class", "errorlbl")
            .and("have.attr", "style", "color: red; visibility: visible;");
          cy.reload();
        });
      });
      describe("VErify that the address details should contain Email field", () => {
        it("Verify that the aria field have label name البريد الإلكتروني ", () => {
          cy.get(
            ":nth-child(28) > .col-sm-12 > :nth-child(1) > .form-group > label"
          ).should("contain", "البريد الإلكتروني ");
        });
        it("Verify that the Aria field should have star with red color beside the label name", () => {
          cy.get(
            ":nth-child(28) > .col-sm-12 > :nth-child(1) > .form-group > label > .fa"
          ).should("have.css", "color", "rgb(255, 0, 0)");
        });
        it("Verify that the Email Field should has placeholder (example@mail.com)", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEmail").should(
            "have.attr",
            "placeholder",
            "example@mail.com"
          );
        });
        it("Verify that if the user enter invalid email, error message should appear", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEmail").type("aasfasf");
          cy.get(
            ":nth-child(28) > .col-sm-12 > :nth-child(1) > .form-group > label"
          ).click();
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator8")
            .should("be.visible")
            .and("contain", "البريد الإلكتروني غير صحيح");
          cy.get("#ctl00_ContentPlaceHolder1_txtEmail").clear();
        });
        it("Verify that if the user enter invalid email, error message should appear", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEmail").type("Amer@gmail");
          cy.get(
            ":nth-child(28) > .col-sm-12 > :nth-child(1) > .form-group > label"
          ).click();
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator8")
            .should("be.visible")
            .and("contain", "البريد الإلكتروني غير صحيح");
          cy.get("#ctl00_ContentPlaceHolder1_txtEmail").clear();
        });
        it("Verify that if the user enter invalid email, error message should appear", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEmail").type("asdf3 @dwqd.com");
          cy.get(
            ":nth-child(28) > .col-sm-12 > :nth-child(1) > .form-group > label"
          ).click();
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator8")
            .should("be.visible")
            .and("contain", "البريد الإلكتروني غير صحيح");
          cy.get("#ctl00_ContentPlaceHolder1_txtEmail").clear();
        });
        it("Verify that if the user enter invalid email, error message should appear", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEmail").type(
            "ِسيشسي@gmail.com"
          );
          cy.get(
            ":nth-child(28) > .col-sm-12 > :nth-child(1) > .form-group > label"
          ).click();
          cy.get("#ctl00_ContentPlaceHolder1_RegularExpressionValidator8")
            .should("be.visible")
            .and("contain", "البريد الإلكتروني غير صحيح");
          cy.get("#ctl00_ContentPlaceHolder1_txtEmail").clear();
        });
        it("Verify that if the user enter valid email, error message should appear", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtEmail").type(
            "Amerhaddad@gemail.com"
          );
          cy.get(
            ":nth-child(28) > .col-sm-12 > :nth-child(1) > .form-group > label"
          ).click();
          cy.get(
            "#ctl00_ContentPlaceHolder1_RegularExpressionValidator8"
          ).should("not.be.visible");
          cy.get("#ctl00_ContentPlaceHolder1_txtEmail").clear();
        });
      });
      describe("VErify that the address details should contain Building no field", () => {
        it("Verify that the Building no field have label name رقم البناية ", () => {
          cy.get(
            ":nth-child(28) > .col-sm-12 > :nth-child(2) > .form-group > label"
          ).should("contain", "رقم البناية ");
        });
        it("Verify that the Building no field should have star with red color beside the label name", () => {
          cy.get(
            ":nth-child(28) > .col-sm-12 > :nth-child(2) > .form-group > label > .fa"
          ).should("have.css", "color", "rgb(255, 0, 0)");
        });
        it("Verify that the Building no should be mandatory", () => {
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator82").should(
            "have.attr",
            "style",
            "color: red; visibility: visible;"
          );
        });
        it("Verify that if the user enter valid data sholud allow him/her to continue", () => {
          cy.get("##ctl00_ContentPlaceHolder1_txtBuildingNo").type("34");
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator82").should(
            "have.attr",
            "style",
            "color: red; visibility: hidden;"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtBuildingNo").clear();
        });
        it("Verify that if the user enter valid data sholud allow him/her to continue", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtBuildingNo").type(
            "asfmlkasf / as 34"
          );
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator82").should(
            "have.attr",
            "style",
            "color: red; visibility: hidden;"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtBuildingNo").clear();
        });
        it("Verify that if the user enter valid data sholud allow him/her to continue", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtBuildingNo").type(
            "asfmlkasf -+ 34"
          );
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator82").should(
            "have.attr",
            "style",
            "color: red; visibility: hidden;"
          );
          cy.get("#ctl00_ContentPlaceHolder1_txtBuildingNo").clear();
        });
      });
      describe.only("VErify that the address details should contain العنوان / اسم الشارع", () => {
        it("Verify that the Address / Street field have label name رقم البناية ", () => {
          cy.get(
            ":nth-child(28) > .col-sm-12 > :nth-child(3) > .form-group > label"
          ).should("contain", "العنوان / اسم الشارع ");
        });
        it("Verify that the Address / Street field should have star with red color beside the label name", () => {
          cy.get(
            ":nth-child(28) > .col-sm-12 > :nth-child(3) > .form-group > label > .fa"
          ).should("have.css", "color", "rgb(255, 0, 0)");
        });
        it("Verify that the Address / Street should be mandatory", () => {
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator83").should(
            "have.attr",
            "style",
            "color: red; visibility: visible;"
          );
        });
        it("Verify that if the user enter valid data sholud allow him/her to continue", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtAddressStreet")
            .type("First",{force:true})

		  cy.get('#ctl00_ContentPlaceHolder1_txtBuildingNo').click({force:true})
		  cy.get("#ctl00_ContentPlaceHolder1_txtAddressStreet").click({force:true})
          cy.get("#ctl00_ContentPlaceHolder1_txtAddressStreet").should("have.css","color","rgb(64, 64, 64)");
          cy.get("#ctl00_ContentPlaceHolder1_txtAddressStreet")
            .clear({force:true});
        });
        it("Verify that if the user enter valid data sholud allow him/her to continue", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtAddressStreet").type(
            "Sceond 56456 -+*-",{force:true})
         
		  cy.get('#ctl00_ContentPlaceHolder1_txtBuildingNo').click({force:true})
		  cy.get("#ctl00_ContentPlaceHolder1_txtAddressStreet").click({force:true})
          cy.get("#ctl00_ContentPlaceHolder1_txtAddressStreet").should("have.css","color","rgb(64, 64, 64)");
          cy.get("#ctl00_ContentPlaceHolder1_txtAddressStreet").clear({force:true});
        });
      });
      describe("VErify that the address details should contain Mobile no field", () => {
        it("Verify that the Mobile number field have label name الهاتف المتنقل  ", () => {
          cy.get(":nth-child(29) > .form-group > label").should(
            "contain",
            "الهاتف المتنقل "
          );
        });
        it("Verify that the Mobile number field should have star with red color beside the label name", () => {
          cy.get(":nth-child(29) > .form-group > label > .fa").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it("Verify that the mobile number should be disabled", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtMobileNo").should(
            "have.attr",
            "disabled",
            "disabled"
          );
        });
        it("Verify that the mobile number should be maxlength with 16 ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtMobileNo").should(
            "have.attr",
            "maxlength",
            "16"
          );
        });
        it("Verify that the mobile number has destination LTR ", () => {
          cy.get("#ctl00_ContentPlaceHolder1_txtMobileNo").should(
            "have.attr",
            "style",
            "direction: ltr"
          );
        });
      });
      //Additional Information
      describe("Verify that the additional information contain Are you a/an? field", () => {
        it("Verify that the Mobile number field have label name طبيعة العمل  ", () => {
          cy.get(":nth-child(36) > .form-group > :nth-child(1)").should(
            "contain",
            "طبيعة العمل "
          );
        });
        it("Verify that the Mobile number field should have star with red color beside the label name", () => {
          cy.get(":nth-child(36) > .form-group > :nth-child(1) > .fa").should(
            "have.css",
            "color",
            "rgb(255, 0, 0)"
          );
        });
        it("Verify that if the user click calcolate without choose option, validate message should appear", () => {
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator48")
            .should("be.visible")
            .and("contain", "حقل مطلوب");
        });
        it("Verify that if the user click calcolate with choose option, validate message should appear", () => {
          cy.get("#ctl00_ContentPlaceHolder1_rdoAreYouJob_0").click({
            force: true,
          });
          cy.get("#ctl00_ContentPlaceHolder1_btnSendCalculate").click();
          cy.get("#ctl00_ContentPlaceHolder1_RequiredFieldValidator48")
            .should("not.be.visible")
            .and("contain", "حقل مطلوب");
          cy.reload();
        });
        it("Verify that the Are you a/an should exist 4 options", () => {
          cy.get(
            "#ctl00_ContentPlaceHolder1_rdoAreYouJob > tbody > tr > :nth-child(1)"
          )
            .should("contain", "موظف")
            .should("have.css", "color", "rgb(29, 33, 70)");
          cy.get("#ctl00_ContentPlaceHolder1_rdoAreYouJob_0")
            .click({ force: true })
            .should("have.css", "color", "rgb(29, 33, 70)");
        });
        it("Verify that the Are you a/an should exist 4 options", () => {
          cy.get(
            "#ctl00_ContentPlaceHolder1_rdoAreYouJob > tbody > tr > :nth-child(2) > label"
          )
            .should("contain", "رجل أعمال")
            .should("have.css", "color", "rgb(29, 33, 70)");
          cy.get("#ctl00_ContentPlaceHolder1_rdoAreYouJob_1")
            .click({ force: true })
            .should("have.css", "color", "rgb(29, 33, 70)");
        });
        it("Verify that the Are you a/an should exist 4 options", () => {
          cy.get(
            "#ctl00_ContentPlaceHolder1_rdoAreYouJob > tbody > tr > :nth-child(3)"
          )
            .should("contain", "اعمال حرة")
            .should("have.css", "color", "rgb(29, 33, 70)");
          cy.get("#ctl00_ContentPlaceHolder1_rdoAreYouJob_2")
            .click({ force: true })
            .should("have.css", "color", "rgb(29, 33, 70)");
        });
        it("Verify that the Are you a/an should exist 4 options", () => {
          cy.get(
            "#ctl00_ContentPlaceHolder1_rdoAreYouJob > tbody > tr > :nth-child(4)"
          )
            .should("contain", "أخرى")
            .should("have.css", "color", "rgb(29, 33, 70)");
          cy.get("#ctl00_ContentPlaceHolder1_rdoAreYouJob_3")
            .click({ force: true })
            .should("have.css", "color", "rgb(29, 33, 70)");
        });
      });
      /*describe('Check the verification for the customer',()=>{
                    it('VErify that if the customer not exist in the core (new customer)',()=>{
                        cy.get('#ctl00_ContentPlaceHolder1_txtNationalId').type('1595354875')
                        cy.get('#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0').click({force: true})
                        cy.get('#myModal1').contains('عميلنا العزيز،عذراً، لم نتمكن من التحقق من البيانات التي ادخلتها، للمزيد من البيانات يرجى التواصل مع مركز خدمة العملاء على الرقم 065609888').should('not.exist')
                        cy.get('#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0').click({force: true})
                        cy.get('#myModal1 > .modal-dialog > .modal-content > .modal-body').should('not.be.visible')
                        cy.get('#ctl00_ContentPlaceHolder1_btnSendCalculate').should('not.have.attr','disabled','disabled')
                        cy.get('#ctl00_ContentPlaceHolder1_txtNationalId').clear()
                    })
                    it('VErify that if the customer Exist in the core and have medical policy with match mobile number',()=>{
                        cy.get('#ctl00_ContentPlaceHolder1_txtNationalId').type('0001236432')
                        cy.get('#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0').click({force: true})
                        cy.get('#myModal1').contains('عميلنا العزيز،عذراً، لم نتمكن من التحقق من البيانات التي ادخلتها، للمزيد من البيانات يرجى التواصل مع مركز خدمة العملاء على الرقم 065609888').should('not.exist')
                        cy.get('#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0').click({force: true})
                        cy.get('#myModal1 > .modal-dialog > .modal-content > .modal-body').should('not.be.visible')
                        cy.get('#popEFAWATEERcomClose > span').click({force: true})
                        cy.get('#ctl00_ContentPlaceHolder1_btnSendCalculate').should('not.have.attr','disabled','disabled')
                        cy.get('#ctl00_ContentPlaceHolder1_txtNationalId').clear()
                    })
                    it('VErify that if the customer Exist in the core and have medical policy with not mobile number',()=>{
                        cy.get('#ctl00_ContentPlaceHolder1_txtNationalId').type('0001236432')
                        cy.get('#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0').click({force: true})
                        cy.get('#myModal2 > .modal-dialog > .modal-content').should('be.visible')
                        cy.get('[for="chkEFAWATEERcom"]').contains('رقم حسابك التأمين الخاص بك لدينا(اي فواتيركم)').should('be.visible')
                        cy.get('.modal-header').contains('رقم اي بوليصة تأمين خاصة بكرقم اي بوليصة تأمين خاصة بك').should('be.visible')
                        cy.get('#ctl00_ContentPlaceHolder1_rdoJordanianNationality_0').click({force: true})
                        cy.get('#myModal1 > .modal-dialog > .modal-content > .modal-body').should('not.be.visible')
                        cy.get('#popEFAWATEERcomClose > span').click({force: true})
                        cy.get('#ctl00_ContentPlaceHolder1_btnSendCalculate').should('not.have.attr','disabled','disabled')
                        cy.get('#ctl00_ContentPlaceHolder1_txtNationalId').clear()
                    })
                    it('VErify that if the customer exist and have AMAN policy (Expiry) with match mobile number',()=>{

                    })
                    it('VErify that if the customer exist and have AMAN policy(Active) with match mobile number ',()=>{

                    })
                    it('VErify that if the customer exist and have medical policy (Active) with match mobile number ',()=>{

                    })
                    it('VErify that if the customer exist and have AMAN policy (inprogress) with match mobile number',()=>{

                    })
                    it('VErify that if the customer exist and have medical AMAN (inprogress) with match mobile number',()=>{

                    })
                    it('VErify that if the customer exist and have AMAN (Cancelled)with match mobile number',()=>{

                    })
                    it('VErify that if the customer exist and have medical (Cancelled)with match mobile number',()=>{

                    })
                    it('VErify that if the customer exist and have AMAN (Freeze)with match mobile number',()=>{

                    })
                    it('VErify that if the customer exist and have medical (Freeze)with match mobile number',()=>{

                    })
                    it('VErify that if the customer exist and have medical & AMAN with claim and match mobile number',()=>{

                    })
                    it('VErify that if the customer exist ',()=>{

                    })
                    it('VErify that if the customer exist ',()=>{

                    })
                    it('VErify that if the customer exist ',()=>{

                    })
                    it('VErify that if the customer exist ',()=>{

                    })
                    it('VErify that if the customer exist ',()=>{

                    })
                    it('VErify that if the customer exist ',()=>{

                    })
                    it('VErify that if the customer exist ',()=>{

                    })
                    it('VErify that if the customer exist ',()=>{

                    })
                })*/
    });
  });
});

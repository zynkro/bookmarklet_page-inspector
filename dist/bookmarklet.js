javascript:(function()%7B!function()%7Bconst%20e%3D%5B%22yellow%22%2C%22white%22%2C%22white%22%2C%22white%22%5D%2Ct%3D%5B%22%238B0000%22%2C%22%23C4738F%22%2C%22%23E37E01%22%2C%22%23F9D535%22%5D%3Bfunction%20l(e)%7Blet%20t%3De.parentElement%3Bfor(%3Bt%3B)%7Bif(%22HEADER%22%3D%3D%3Dt.tagName%7C%7C%22wpadminbar%22%3D%3D%3Dt.id)return!0%3Bt%3Dt.parentElement%7Dreturn!1%7Dfor(let%20l%3D1%3Bl%3C%3D6%3B%2B%2Bl)%7Blet%20o%3Ddocument.getElementsByTagName(%22h%22%2Bl)%3Bfor(let%20r%3D0%3Br%3Co.length%3B%2B%2Br)%7Blet%20n%3Do%5Br%5D.style%3Bn.color%3F(n.color%3D%22%22%2Cn.backgroundColor%3D%22%22%2Cn.boxShadow%3D%220%200%200%200%20rgba(0%2C%200%2C%200%2C%200.5)%22)%3A(n.color%3De%5Bl-1%5D%2Cn.backgroundColor%3Dt%5Bl-1%5D%2Cn.boxShadow%3D%220%208px%2018px%20-8px%20rgba(0%2C%200%2C%200%2C%200.6)%22)%7D%7Dlet%20o%3Ddocument.getElementsByTagName(%22p%22)%3Bfor(let%20e%3D0%3Be%3Co.length%3B%2B%2Be)if(!l(o%5Be%5D))%7Blet%20t%3Do%5Be%5D.style%3Bt.color%3Ft.outline%3D%22%22%3At.outline%3D%222px%20dashed%20%23D7D7D7%22%7Dlet%20r%3Ddocument.getElementsByTagName(%22span%22)%3Bfor(let%20e%3D0%3Be%3Cr.length%3B%2B%2Be)if(!l(r%5Be%5D))%7Blet%20t%3Dr%5Be%5D%3Bif(%22A%22!%3D%3Dt.parentElement.tagName%26%26%22P%22!%3D%3Dt.parentElement.tagName%26%26%22UL%22!%3D%3Dt.parentElement.tagName%26%26%22LI%22!%3D%3Dt.parentElement.tagName%26%26%22IMG%22!%3D%3Dt.parentElement.tagName%26%26!t.querySelector(%22a%22))%7Blet%20e%3Dt.style%3Be.outline%3Fe.outline%3D%22%22%3Ae.outline%3D%222px%20dashed%20lime%22%7D%7Dlet%20n%3Ddocument.getElementsByTagName(%22ul%22)%3Bfor(let%20e%3D0%3Be%3Cn.length%3B%2B%2Be)if(!l(n%5Be%5D))%7Blet%20t%3Dn%5Be%5D.style%3Bt.outline%3Ft.outline%3D%22%22%3At.outline%3D%226px%20dotted%20cyan%22%7Dlet%20a%3Ddocument.getElementsByTagName(%22li%22)%3Bfor(let%20e%3D0%3Be%3Ca.length%3B%2B%2Be)if(!l(a%5Be%5D))%7Blet%20t%3Da%5Be%5D.style%3Bt.outline%3Ft.backgroundColor%3D%22%22%3At.backgroundColor%3D%22%235BC2B7%22%7Dlet%20d%3Ddocument.getElementsByTagName(%22a%22)%3Bfor(let%20e%3D0%3Be%3Cd.length%3B%2B%2Be)if(!l(d%5Be%5D))%7Blet%20t%3Dd%5Be%5D.style%3Bt.border%3F(t.border%3D%22%22%2Ct.color%3D%22%22%2Ct.fontWeight%3D%22%22)%3A(t.border%3D%223px%20dotted%20red%22%2Ct.color%3D%22red%22%2Ct.fontWeight%3D%22bold%22)%7Dlet%20g%3Ddocument.getElementsByTagName(%22form%22)%3Bfor(let%20e%3D0%3Be%3Cg.length%3B%2B%2Be)if(!l(g%5Be%5D))%7Blet%20t%3Dg%5Be%5D.style%3Bt.border%3F(t.border%3D%22%22%2Ct.color%3D%22%22%2Ct.backgroundColor%3D%22%22)%3A(t.border%3D%224px%20dashed%20blue%22%2Ct.color%3D%22blue%22%2Ct.backgroundColor%3D%22%23c9e5ff%22)%7Dlet%20m%3Ddocument.getElementsByTagName(%22label%22)%3Bfor(let%20e%3D0%3Be%3Cm.length%3B%2B%2Be)if(!l(m%5Be%5D))%7Blet%20t%3Dm%5Be%5D.style%3Bt.border%3Ft.border%3D%22%22%3At.border%3D%223px%20dotted%20blue%22%7Dlet%20u%3Ddocument.querySelectorAll(%22input%2C%20select%2C%20textarea%22)%3Bfor(let%20e%3D0%3Be%3Cu.length%3B%2B%2Be)if(!l(u%5Be%5D))%7Blet%20t%3Du%5Be%5D.style%3Bt.border%3Ft.backgroundColor%3D%22%22%3At.backgroundColor%3D%22%23a6d4ff%22%7Dlet%20c%3Ddocument.querySelectorAll(%22form%20button%22)%3Bfor(let%20e%3D0%3Be%3Cc.length%3B%2B%2Be)if(!l(c%5Be%5D))%7Blet%20t%3Dc%5Be%5D.style%3Bt.border%3Ft.border%3D%22%22%3At.border%3D%229px%20solid%20blue%22%7D%7D()%3B%7D)()
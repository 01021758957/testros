client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
__👋 👤 😻السلام عليكم__
حبيت انشر هذا السيرفر لانه بيفدك بطريقه رهيبه‍.
بيفيدك بتعليمك كيف تصنع بوت خاص بككء
ومو بس كذا في متاجر والعاب وانمي.
وسوف توجد كل الاشياء الي تحتاجها هنآاك..
                               [ https://discord.gg/n838CZ ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
__👋 👤 😻السلام عليكم__
حبيت انشر هذا السيرفر لانه بيفدك بطريقه رهيبه‍.
بيفيدك بتعليمك كيف تصنع بوت خاص بككء
ومو بس كذا في متاجر والعاب وانمي.
وسوف توجد كل الاشياء الي تحتاجها هنآاك..
                               [ https://discord.gg/n838CZ ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
});

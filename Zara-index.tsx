<SafeAreaProvider>
  <SafeAreaView style={styles.safeArea}>
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.backButton}>‹</Text>

        <View style={styles.headerText}>
          <Text style={styles.accountName}>OOTD_EVERYDAY</Text>
          <Text style={styles.postText}>Posts</Text>
        </View>

        <View style={styles.headerSpace} />
      </View>



      safeArea: {
  flex: 1,
  backgroundColor: "white",
},

scrollContent: {
  backgroundColor: "white",
  paddingBottom: 20,
},

header: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 15,
  paddingVertical: 8,
  borderBottomWidth: 1,
  borderBottomColor: "#dddddd",
},

backButton: {
  width: 30,
  color: "black",
  fontSize: 38,
},

headerText: {
  flex: 1,
  alignItems: "center",
},

headerSpace: {
  width: 30,
},

accountName: {
  color: "grey",
  fontSize: 12,
  fontWeight: "bold",
},

postText: {
  color: "black",
  fontSize: 18,
  fontWeight: "bold",
},

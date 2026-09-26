<SafeAreaView
  style={styles.container}
  edges={["left", "right", "bottom"]}
>
  <View style={styles.header}>
    <Text style={styles.backArrow}>‹</Text>

    <View style={styles.headerTitleContainer}>
      <Text style={styles.headerSubTitle}>Posts</Text>
      <Text style={styles.headerTitle}>OOTD_EVERYDAY</Text>
    </View>

    <View style={styles.spacer} />
  </View>

  <ScrollView contentContainerStyle={styles.scroll}>
    {/* The other sections go here */}
  </ScrollView>
</SafeAreaView>

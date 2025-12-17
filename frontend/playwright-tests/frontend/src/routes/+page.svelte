<script>
  import { validateForm } from '$lib/validation'

  let form = {
    name: "",
    email: "",
    phone: "",
    message: ""
  }

  let responseMessage = ""
  let showError = false
  let success = false  // ✅ Flag to show success message

  async function submitForm() {
    responseMessage = ""
    success = false   // Reset success flag on each submit
    showError = true  // Show validation errors

    const validationResult = validateForm(form)

    if (validationResult !== 'SUCCESS') {
      responseMessage = validationResult
      return
    }

    // ✅ Validation passed, proceed to submit
    try {
      const query = `
        mutation AddStudent(
          $name: String!
          $email: String!
          $phone: String!
          $message: String!
        ) {
          addStudent(
            name: $name
            email: $email
            phone: $phone
            message: $message
          ) {
            name
          }
        }
      `

      const res = await fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query,
          variables: form
        })
      })

      const result = await res.json()

      if (result.data && result.data.addStudent) {
        success = true
        responseMessage = "Student registered successfully ✅"
        form = { name: "", email: "", phone: "", message: "" }
        showError = false
      } else {
        responseMessage = "Registration failed ❌"
      }
    } catch {
      responseMessage = "Server error ❌"
    }
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center p-4">
  <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg border border-gray-200">

    <h1 class="text-3xl font-extrabold text-center text-blue-700 mb-6">
      Student Registration
    </h1>

    <div class="space-y-4">

      <input
        class="w-full border p-3 rounded-lg"
        placeholder="Full Name"
        bind:value={form.name}
      />

      <input
        class="w-full border p-3 rounded-lg"
        placeholder="Email"
        bind:value={form.email}
      />

      <input
        class="w-full border p-3 rounded-lg"
        placeholder="Phone"
        bind:value={form.phone}
      />

      <textarea
        class="w-full border p-3 rounded-lg h-28"
        placeholder="Message"
        bind:value={form.message}
      ></textarea>

      <button
        on:click={submitForm}
        class="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700">
        Submit
      </button>

      {#if showError && !success && responseMessage}
        <p class="mt-4 text-center font-bold text-red-600">
          {responseMessage}
        </p>
      {/if}

      {#if success}
        <p class="mt-4 text-center font-bold text-green-600">
          {responseMessage}
        </p>
      {/if}

    </div>
  </div>
</div>

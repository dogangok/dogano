"use client"
export const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-container border-top">
        <form
          className="newsletter-form embeddable-buttondown-form"
          action="/"
          method="post"
          target="popupwindow"
          onSubmit={e => {
            e.preventDefault()
            window.open("https://buttondown.email/skyborn", "popupwindow")
          }}
        >
          <input
            id="bd-email"
            name="email"
            type="email"
            className="newsletter-input"
            placeholder="Subscribe to the newsletter"
          />
          <label className="newsletter-label" htmlFor="bd-email">
            Email Address
          </label>
          <input type="hidden" value="1" name="embed"></input>
          <input type="submit" value="→" className="newsletter-btn"></input>
        </form>
      </div>
    </section>
  )
}
